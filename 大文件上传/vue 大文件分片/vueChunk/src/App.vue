<template>
  <form>
    <input type="file" @change="fileInput" />
    <button type="submit">Upload</button>
  </form>
</template>

<script setup>
import axios from "axios";
import { cutFile } from "./utils/cutFile";
async function fileInput(e) {
  const file = e.target.files[0];
  console.log(file);
  const chunks = await cutFile(file); //处理分片
  console.log(chunks, "chunks");
  uploadChunk(chunks, file.name);
}

async function uploadChunk(chunks, fileName) {
  let max = 6; // Maximum concurrency
  let index = 0;
  let taskPool = [];
  const totalChunks = chunks.length;

  while (index < chunks.length) {
    const formData = new FormData();
    formData.append("blob", chunks[index].blob);
    formData.append("start", chunks[index].start);
    formData.append("end", chunks[index].end);
    formData.append("index", chunks[index].index);
    formData.append("hash", chunks[index].hash);
    formData.append("fileName", fileName);
    formData.append("totalChunks", totalChunks);

    // 实际上blob就是文件的具体数据，我们要上传的也是blob，只不过blob需要放在fromData中上传，如果像读取内容的话，需要借助fileReader，或者下面的方式
    // console.log(chunks[index].blob, "formData");
    // const text = await new Response(chunks[index].blob).text();
    // const text = await chunks[index].blob.text();
    // console.log(text, "formData");
    const task = axios.post("http://127.0.0.1:3000/upload", formData);
    taskPool.push(task);
    if (taskPool.length >= max) {
      await Promise.race(taskPool);
      taskPool = taskPool.filter((t) => t.status !== "fulfilled");
    }
    index++;
  }
  await Promise.all(taskPool);
}

// Call function with the appropriate file name
</script>

<style></style>
