/**
 * 无论成功还是失败都会执行回调
 * @param {Function} onSettled
 */
Promise.prototype.MyFinally = function (onSettled) {
  return this.then(async (data) => {
    await onSettled();
    return data;
  }).catch(async (reason) => {
    await onSettled();
    return reason;
  });
};

Promise.resolve(123)
  .then((res) => {
    console.log(res); //123
    return Promise.reject(456);
  })
  .MyFinally(() => {
    console.log("finally");
    return "finally本身不返回值";
  })
  .then(
    () => {},
    (err) => {
      console.log(err); //123
      return 789;
    }
  )
  .MyFinally(() => console.log("finally"))
  .then((res) => console.log(res)); //789
