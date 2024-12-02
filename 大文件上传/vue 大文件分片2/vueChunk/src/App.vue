<template>
  <form>
    <input type="file" @change="fileInput" />
    <button type="submit">Upload</button>
  </form>
</template>

<script setup>
import { cutFile } from "./utils/cutFile";
async function fileInput(e) {
  const file = e.target.files[0];
  console.log(file);
  const chunks = await cutFile(file); //处理分片
  console.log(chunks, "chunks");
  uploadChunk(chunks);
}

function uploadChunk(chunks) {}
</script>

<style></style>
