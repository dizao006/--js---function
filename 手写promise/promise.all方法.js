function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        throw new TypeError('Argument must be an array');
      }
      
      let results = [];
      let completed = 0;
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise) // 将 promise 和非 promise 值都转换为 promise
          .then(value => {
            results[index] = value;
            completed++;
            if (completed === promises.length) {
              resolve(results);
            }
          })
          .catch(reject); // 如果任何 promise 被拒绝，立即拒绝 Promise.all
      });
  
      if (promises.length === 0) {
        resolve(results); // 如果传入空数组，立即解决 Promise.all
      }
    });
  }
  
  // 示例使用
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  
  promiseAll([promise1, promise2, promise3]).then(values => {
    console.log(values); // [3, 42, "foo"]
  });
  