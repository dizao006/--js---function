//  cjs是  commenjs的书写方式
// 它运行在一个宏任务中
// process队列优先级是要高于微队列的，并且必须在一个任务清空完之后才去取另一个队列
// 1x6873452
console.log("1");
setTimeout(() => {
  console.log("2");
}, 100);

const p = new Promise((resolve, reject) => {
  resolve(3);
  Promise.resolve("7").then(console.log);
  console.log("x");
}).then((res) => {
  console.log(res);
  console.log("4");
  process.nextTick(() => {
    console.log("5");
  });
});

process.nextTick(() => {
  console.log("6");
});
process.nextTick(() => {
  console.log("8");
});
