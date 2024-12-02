const test = new Promise((resolve, reject) => {
  let time = Math.floor(Math.random() * (15 - 5) + 5);
  setTimeout(() => {
    if (time < 8) {
      reject("跑步失败，出了点问题");
    } else {
      resolve(time);
    }
  }, time);
});
// test.then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log("失败了", err);
//   }
// );

const pro = Promise.race([
  Promise.resolve(2),
  Promise.reject(1),
  Promise.resolve(3),
]);

setTimeout(() => {
  console.log("ss", pro);
}, 0);
