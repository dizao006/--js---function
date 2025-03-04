// 假设这是你的 1w 行数据
const data = Array.from({ length: 10000 }, (_, i) => ({
  x: Math.random() * 800, // 随机 x 坐标
  y: Math.random() * 600, // 随机 y 坐标
}));

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 渲染数据到 Canvas
data.forEach((point) => {
  ctx.fillStyle = "blue"; // 设置填充颜色
  ctx.beginPath();
  ctx.arc(point.x, point.y, 2, 0, Math.PI * 2); // 绘制圆点
  ctx.fill();
});
