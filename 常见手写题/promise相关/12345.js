// function run() {
//   new Promise((resolve, reject) => {
//     for (let i = 1; i <= 5; i++) {
//       setTimeout(async () => {
//         console.log(i);
//       }, 1000 * i);
//     }
//     resolve();
//   });
// }

// run();

function run(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(str);
      resolve();
    }, 1000);
  });
}

async function time() {
  for (let i = 0; i < 5; i++) {
    await run(i);
  }
}
time();
