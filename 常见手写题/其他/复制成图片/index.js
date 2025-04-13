import html2canvas from "./node_modules/html2canvas/dist/html2canvas.esm.js";

// 将canvas转换为图片并且粘贴到剪切板中
const ul = document.querySelector("ul");
const copy = document.querySelector("#copy");
copy.addEventListener("click", () => {
  html2canvas(ul).then(async (canvas) => {
    console.log(":sss");
    canvas.toBlob(
      (blob) => {
        const clipBoardItem = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([clipBoardItem]);
        // navigator.clipboard.writeText("asdasd").then(() => {
        //   console.log("ok");
        // });
      },
      { type: "image/png" }
    );
  });
});

// const selectable = document.getElementById("selectable");
// let isSelecting = false;
// let startX, startY, endX, endY;

// const selection = document.getElementById("selection");

// selectable.addEventListener("mousedown", (e) => {
//   isSelecting = true;
//   startX = e.clientX;
//   startY = e.clientY;
//   selection.style.left = `${startX}px`;
//   selection.style.top = `${startY}px`;
//   selection.style.width = `0px`;
//   selection.style.height = `0px`;
//   selection.style.display = "block"; // 显示选区
// });

// document.addEventListener("mousemove", (e) => {
//   if (isSelecting) {
//     endX = e.clientX;
//     endY = e.clientY;
//     const width = endX - startX;
//     const height = endY - startY;

//     // 计算选区的宽度和高度
//     selection.style.width = `${Math.abs(width)}px`;
//     selection.style.height = `${Math.abs(height)}px`;

//     // 计算选区的左上角位置
//     selection.style.left = `${width < 0 ? endX : startX}px`;
//     selection.style.top = `${height < 0 ? endY : startY}px`;
//   }
// });

// document.addEventListener("mouseup", async () => {
//   if (isSelecting) {
//     isSelecting = false;
//     selection.style.display = "none"; // 隐藏选区
//     const rect = selectable.getBoundingClientRect();
//     const width = endX - startX;
//     const height = endY - startY;

//     // 创建一个临时的canvas来捕获选中的区域
//     const canvas = document.createElement("canvas");
//     canvas.width = Math.abs(width);
//     canvas.height = Math.abs(height);
//     const ctx = canvas.getContext("2d");

//     // 计算选区的起始位置
//     const startXAdjusted = width < 0 ? endX - rect.left : startX - rect.left;
//     const startYAdjusted = height < 0 ? endY - rect.top : startY - rect.top;

//     // 将选中的区域绘制到canvas上
//     ctx.drawImage(
//       selectable,
//       startXAdjusted,
//       startYAdjusted,
//       Math.abs(width),
//       Math.abs(height),
//       0,
//       0,
//       Math.abs(width),
//       Math.abs(height)
//     );

//     // 将canvas转换为Blob并粘贴到剪切板
//     canvas.toBlob((blob) => {
//       const clipBoardItem = new ClipboardItem({ "image/png": blob });
//       navigator.clipboard
//         .write([clipBoardItem])
//         .then(() => {
//           console.log("选中的区域已复制到剪切板");
//         })
//         .catch((err) => {
//           console.error("复制到剪切板失败:", err);
//         });
//     }, "image/png");
//   }
// });
