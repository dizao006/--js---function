import { createChunk } from "./createChunk";

onmessage = async (e) => {
  const { file, CHUNK_SIZE, startIndex, endChunkIndex } = e.data;
  const result = [];
  for (let i = startIndex; i < endChunkIndex; i++) {
    result[i] = createChunk(file, i, CHUNK_SIZE); //创建每一片切片，并将每个切片的内容保存到结果中
  }
  const chunks = await Promise.all(result); //等待所有切片完成
  postMessage(chunks); //将完成的结果消息传递给主线程
};
