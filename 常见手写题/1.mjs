// mjs是esmodule的写法
// 他是运行在微任务中的，整个文件都是在微任务中，并且存在一个process队列
// 正常情况下
// process队列优先级是要高于微队列的，并且必须在一个任务清空完之后才去取另一个队列
//但是由于这里是mjs，运行在微任务队列中，所以微队列必须运行完才会去看process队列
// 所以导致了两个输出不同
// 1x7346852
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
