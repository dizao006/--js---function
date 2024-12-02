const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 创建 express 应用
const app = express();

// 设置存储配置
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 确保上传目录存在
    const uploadDir = "uploads/";
    fs.existsSync(uploadDir) || fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // 使用原始文件名
    cb(null, file.originalname);
  },
});

// 创建 multer 实例
const upload = multer({ storage: storage });

// 创建一个 POST 路由来处理文件上传
app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    res.send({
      message: "File uploaded successfully",
      filename: req.file.filename,
    });
  } else {
    res.status(400).send({
      message: "No file uploaded.",
    });
  }
});

// 设置服务器端口
const PORT = 3000;

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
