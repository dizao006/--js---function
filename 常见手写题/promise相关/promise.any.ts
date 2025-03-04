function MyAny(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0)
      resolve(reject(new AggregateError([], "All promises were rejected")));
    const res = [];
    let complete = 0;
    arr.forEach((ps, index) => {
      Promise.resolve(ps)
        .then((e) => {
          resolve(e);
        })
        .catch((e) => {
          complete++;
          res[index] = e;
          if (complete === arr.length) {
            reject(new AggregateError(res, "All promises were rejected"));
          }
        });
    });
  });
}

// // 测试用例 1：至少有一个 Promise 成功
// const promises1 = [
//   new Promise<number>((_, reject) =>
//     setTimeout(() => reject(new Error("First promise failed")), 100)
//   ),
//   new Promise<number>((resolve) => setTimeout(() => resolve(42), 200)),
//   new Promise<number>((_, reject) =>
//     setTimeout(() => reject(new Error("Third promise failed")), 300)
//   ),
// ];

// MyAny(promises1)
//   .then((result) => {
//     console.log("Test Case 1: Result:", result); // 应该输出 42
//   })
//   .catch((error) => {
//     console.error("Test Case 1: Error:", error);
//   });

// 测试用例 2：所有 Promise 都失败
// const promises2 = [
//   new Promise<number>((_, reject) =>
//     setTimeout(() => reject(new Error("First promise failed")), 100)
//   ),
//   new Promise<number>((_, reject) =>
//     setTimeout(() => reject(new Error("Second promise failed")), 200)
//   ),
//   new Promise<number>((_, reject) =>
//     setTimeout(() => reject(new Error("Third promise failed")), 300)
//   ),
// ];

// MyAny(promises2)
//   .then((result) => {
//     console.log("Test Case 2: Result:", result);
//   })
//   .catch((error) => {
//     console.error("Test Case 2: Error:", error); // 应该抛出 AggregateError
//   });

// 测试用例 3：传入空数组
const promises3: Promise<number>[] = [];

MyAny(promises3)
  .then((result) => {
    console.log("Test Case 3: Result:", result);
  })
  .catch((error) => {
    console.error("Test Case 3: Error:", error); // 应该抛出 AggregateError
  });
