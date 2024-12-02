/**
 *
 * @param {any} data 如果是promise则调用then方法返回，如果不是promise则使用resolve包装成promise返回
 * @returns
 */

Promise.prototype.MyResolve = function (data) {
  return new Promise((resolve, reject) => {
    if (data instanceof Promise) {
      data.then(resolve, reject);
    } else {
      resolve(data);
    }
  });
};
