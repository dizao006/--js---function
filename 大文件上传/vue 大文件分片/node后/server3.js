const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5500;
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(cors());

// 临时上传文件夹路径
const TEMP_UPLOAD_FOLDER = path.join(__dirname, "temp_uploads");
if (!fs.existsSync(TEMP_UPLOAD_FOLDER)) {
  fs.mkdirSync(TEMP_UPLOAD_FOLDER);
}

// 最终上传文件夹路径
const UPLOADS_FOLDER = path.join(__dirname, "uploads");
if (!fs.existsSync(UPLOADS_FOLDER)) {
  fs.mkdirSync(UPLOADS_FOLDER);
}

// 用于存储上传进度信息的对象，以文件哈希值为键
const uploadProgress = {};

app.post("/upload", upload.single("blob"), (req, res) => {
  try {
    const { index, hash, totalChunks, fileName } = req.body;
    if (!fileName) {
      throw new Error("File name is missing");
    }
    const buffer = req.file.buffer;
    const chunkPath = path.join(TEMP_UPLOAD_FOLDER, `${hash}_${index}`);
    fs.writeFileSync(chunkPath, buffer);

    // 更新上传进度信息
    if (!uploadProgress[hash]) {
      uploadProgress[hash] = {
        totalChunks,
        uploadedChunks: 0,
      };
    }
    uploadProgress[hash].uploadedChunks++;

    // 检查是否所有分块都已上传
    if (isAllChunksUploaded(hash, totalChunks)) {
      mergeChunks(hash, totalChunks, fileName);
    }

    // 向客户端发送上传进度信息
    res.status(200).json({
      message: "Chunk uploaded successfully",
      progress: {
        hash,
        totalChunks,
        uploadedChunks: uploadProgress[hash].uploadedChunks,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

function isAllChunksUploaded(hash, totalChunks) {
  for (let i = 0; i < totalChunks; i++) {
    const chunkPath = path.join(TEMP_UPLOAD_FOLDER, `${hash}_${i}`);
    if (!fs.existsSync(chunkPath)) {
      return false;
    }
  }
  return true;
}

function mergeChunks(hash, totalChunks, fileName) {
  const filePath = path.join(UPLOADS_FOLDER, fileName);
  const writeStream = fs.createWriteStream(filePath);

  writeStream.on("error", (err) => {
    console.error(`Error writing file ${fileName}:`, err);
  });

  function appendChunk(index) {
    if (index >= totalChunks) {
      writeStream.end(() => {
        console.log(`File ${fileName} has been successfully merged.`);
        // 合并完成后删除上传进度信息
        delete uploadProgress[hash];
      });
      return;
    }

    const chunkPath = path.join(TEMP_UPLOAD_FOLDER, `${hash}_${i}`);
    const readStream = fs.createReadStream(chunkPath);

    readStream.on("end", () => {
      fs.unlinkSync(chunkPath);
      appendChunk(index + 1);
    });

    readStream.pipe(writeStream, { end: false });
  }

  appendChunk(0);
}

// 新增接口用于获取特定文件的上传进度
app.get("/upload-progress/:hash", (req, res) => {
  const hash = req.params.hash;
  if (uploadProgress[hash]) {
    res.status(200).json({
      progress: {
        hash,
        totalChunks: uploadProgress[hash].totalChunks,
        uploadedChunks: uploadProgress[hash].uploadedChunks,
      },
    });
  } else {
    res.status(404).json({ message: "Progress not found for this hash." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
