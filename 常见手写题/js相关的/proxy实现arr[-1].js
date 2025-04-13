let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function observe(arr) {
  const proxy = new Proxy(arr, {
    get(target, key) {
      let v = target[key];
      if (typeof v === "object") {
        observe(v);
      }
      while (key < 0) {
        let len = target.length;
        key = len - -key;
      }
      return target[key];
    },
  });
  return proxy;
}

const arr2 = observe(arr);
console.log(arr2[-4]);
