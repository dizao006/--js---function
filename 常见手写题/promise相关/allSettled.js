/**
 * 等待所有的Promise有结果后
 * 该方法返回的Promise完成
 * 并且按照顺序将所有结果汇总
 * @param {Iterable} proms
 */

function allSettled(proms) {
  let result = [];
  for (const pro of proms) {
    result.push(
      Promise.resolve(pro)
        .then((data) => {
          return {
            status: FULFILLED,
            data: data,
          };
        })
        .catch((error) => {
          return {
            status: REJECTED,
            data: error,
          };
        })
    );
  }
  return Promise.all(result);
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise2, promise1];
Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result))
);
