// function* infiniteArrayGenerator() {
//   let i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// const infiniteArray = infiniteArrayGenerator();

// console.log(infiniteArray.next().value); // 输出: 0
// console.log(infiniteArray.next().value); // 输出: 1
// console.log(infiniteArray.next().value); // 输出: 2

var a;
var b = new Promise((resolve, reject) => {
  console.log("promise1");
  setTimeout(() => {
    resolve();
  }, 1000);
})
  .then(() => {
    console.log("promise2");
  })
  .then(() => {
    console.log("promise3");
  })
  .then(() => {
    console.log("promise4");
  });

a = new Promise(async (resolve, reject) => {
  console.log(a);
  await b;
  console.log(a);
  console.log("after1");
  await a;
  resolve(true);
  console.log("after2");
});

console.log("end");
