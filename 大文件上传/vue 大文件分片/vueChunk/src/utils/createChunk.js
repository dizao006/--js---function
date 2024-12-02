import SparkMD5 from "spark-md5";
export function createChunk(file, i, CHUNK_SIZE) {
  return new Promise((resolve, reject) => {
    const start = i * CHUNK_SIZE; //得到每一片起始的数量
    const end = start + CHUNK_SIZE; //结束位置
    const spark = new SparkMD5.ArrayBuffer();
    const fileReader = new FileReader();
    const blob = file.slice(start, end); //二进制数据的起始位置和结束位置
    //e.target.result 就是二进制数据，也就是文件转换为二进制的内容
    fileReader.onload = (e) => {
      // const bytes = new Uint8Array(e.target.result);
      // let binaryString = "";

      // for (let i = 0; i < bytes.byteLength; i++) {
      //   binaryString += bytes[i].toString(16).padStart(2, "0");
      // }

      // console.log(binaryString); // 输出二进制数据的十六进制表示
      spark.append(e.target.result); //针对每一个分片进行md5编码
      resolve({
        start,
        end,
        index: i,
        hash: spark.end(),
        blob,
      });
    };

    fileReader.readAsArrayBuffer(blob);
  });
}
