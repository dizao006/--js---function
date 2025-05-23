const obj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    aa: 4,
    dd: 9,
  },
};

function isobj(obj) {
  return typeof obj === "object" && obj !== null && obj !== undefined;
}

// function observe(obj) {
//   let proxy = new Proxy(obj, {
//     get(target, k) {
//       let v = target[k];
//       if (isobj(v)) {
//         v = observe(v);
//       }
//       return v;
//     },
//     set(target, k, val) {
//       if (target[k] !== val) {
//         target[k] = val;
//       }
//     },
//   });
//   return proxy;
// }
// const proxy = observe(obj2);

// console.log(proxy.d.aa);

//监听整个对象而非里面的具体属性，不需要再遍历了，效率提高，同时因为监听的对象，一些方法可以监听到了，比如delete，新增

function observe(obj) {
  const proxy = new Proxy(obj, {
    get(target, k) {
      let v = target[k];
      if (isobj(v)) {
        observe(v);
      }
      console.log("获取到了");

      return v;
    },
    set(target, k, val) {
      if (target[k] !== val) {
        console.log("更改了");
        target[k] = val;
        return true;
      }
    },
  });
  return proxy;
}

const proxy = observe(obj2);
proxy.d.aa = 7;
console.log(proxy.d.aa);
