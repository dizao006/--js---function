const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const upload = multer();

const app = express();
const PORT = 3000;

// 允许跨域请求
app.use(cors());

// 解析 application/json 和 multipart/form-data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 存储分片文件的临时文件夹
const TEMP_UPLOAD_FOLDER = path.join(__dirname, "老接口");
if (!fs.existsSync(TEMP_UPLOAD_FOLDER)) {
  fs.mkdirSync(TEMP_UPLOAD_FOLDER);
}

// 接收分片上传的端点
app.post("/upload", upload.single("blob"), async (req, res) => {
  try {
    const { start, end, index, hash } = req.body;
    const buffer = req.file.buffer;

    // 保存分片到临时文件夹
    const chunkPath = path.join(TEMP_UPLOAD_FOLDER, `${hash}_${index}`);
    fs.writeFileSync(chunkPath, buffer);

    // 返回成功响应
    res.status(200).json({ message: "Chunk uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
