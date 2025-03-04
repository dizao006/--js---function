function myRace(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) resolve([]);
    arr.forEach((ps) => {
      Promise.resolve(ps)
        .then((e) => {
          resolve(e);
        })
        .catch((e) => {
          reject(e);
        });
    });
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
  }, 1500);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
});

myRace([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
