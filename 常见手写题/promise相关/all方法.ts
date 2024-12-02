function PromiseAll(promises: Array<any>) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    }
    let complete = 0;
    let result: any = [];
    promises.forEach((promise, index) => {
      //避免非promise无法调用then，使用resolve进行包装
      Promise.resolve(promise)
        .then((val: any) => {
          result[index] = val;
          complete++;
          if (complete === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
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

PromiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, 42, "foo"]
  })
  .catch((error) => {
    console.error(error);
  });


