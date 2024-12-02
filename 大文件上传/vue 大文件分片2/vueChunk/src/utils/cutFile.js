const CHUNK_SIZE = 1024 * 1024 * 5; //每一片的大小
let THREAD_COUNT = navigator.hardwareConcurrency || 6; //cpu的核心数

export async function cutFile(file) {
  return new Promise((resolve, reject) => {
    const result = []; //分片信息
    const count = Math.ceil(file.size / CHUNK_SIZE); //分片的数量
    const threadChunkCount = Math.ceil(file.size / CHUNK_SIZE); //得到每一个内核分配的任务数量
    let finishCount = 0;
    for (let i = 0; i < THREAD_COUNT; i++) {
      const worker = new Worker(new URL("./worker.js", import.meta.url), {
        //利用多线程进行处理
        type: "module",
      });
      const start = i * threadChunkCount; //记录起始的分片位置
      const end = Math.min(count, (i + 1) * threadChunkCount); //任务的结束位置，注意，结束位置如果比整个分片数量要大，则分片数量为最后一个
      // 向其他线程发消息，将文件与每个分片的大小和起始与结束位置传入
      worker.postMessage({
        file,
        CHUNK_SIZE,
        startIndex: start,
        endChunkIndex: end,
      });

      worker.onmessage = (e) => {
        // 当其他线程给主线程发消息时候触发
        for (let i = start; i < end; i++) {
          result[i] = e.data[i - start];
        }
        worker.terminate(); //终止了当前的Worker，及当前worker的任务已经完成，需要关闭
        finishCount++;
        if (finishCount === THREAD_COUNT) {
          //如果每个worker都完成工作了则返回全部分片的结果
          resolve(result);
        }
      };
    }
  });
}
