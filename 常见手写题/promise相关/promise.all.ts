export {};

function MyPromiseAll(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) resolve([]);
    const res = [];
    let complete = 0;
    arr.forEach((ps, index) => {
      Promise.resolve(ps)
        .then((e) => {
          res[index] = e;
          complete++;
          if (complete === arr.length) {
            resolve(res);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
}

const promise1 = Promise.resolve(3);
const promise4 = () => {
  return new Promise((resolve, reject) => {
    reject("err");
  });
};
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

MyPromiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, 42, "foo"]
  })
  .catch((error) => {
    console.error(error);
  });
