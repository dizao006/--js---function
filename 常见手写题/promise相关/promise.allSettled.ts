const FULFILLED = "FULFILLED";
const REJECTED = "REJECTEDs";
function myAllSettled(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) resolve([]);
    const res = [];
    arr.forEach((ps, index) => {
      res[index] = Promise.resolve(ps)
        .then((e) => {
          return {
            status: FULFILLED,
            value: e,
          };
        })
        .catch((e) => {
          return {
            status: FULFILLED,
            value: e,
          };
        });
    });
    resolve(Promise.all(res));
  });
}

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("First"), 300)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second"), 100)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third"), 200)
);

const promises = [promise1, promise2, promise3];

myAllSettled(promises).then((results) => {
  console.log(results);
  // 验证顺序
  console.assert(results[0].value === "First", "第一个结果顺序错误");
  console.assert(results[1].value === "Second", "第二个结果顺序错误");
  console.assert(results[2].value === "Third", "第三个结果顺序错误");
});
