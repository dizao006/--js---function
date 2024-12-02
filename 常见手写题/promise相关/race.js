/**
 * 返回的Promise与第一个有结果的一致
 * @param {iterator} proms
 */

function race(proms) {
  return new Promise((resolve, reject) => {
    for (const pro of proms) {
      Promise.resolve(pro)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    }
  });
}

let p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 600);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("err, 2");
  }, 500);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
});

race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
