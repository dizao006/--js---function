export {};
function myReject(reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
}

function myReslove(data) {
  return new Promise((resolve, reject) => {
    if (data instanceof Promise) {
      data.then(resolve, reject);
    } else {
      resolve(data);
    }
  });
}
Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};
