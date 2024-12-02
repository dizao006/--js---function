let obj = {
  a: 1,
  b: 2,
  c: {
    s: 5,
    d: 10,
  },
  arr: [1, 2, 3],
};

function isObj(value) {
  let typ = Object.prototype.toString.call(value).slice(8, -1);
  return typ === "Object" || typ === "Array";
}

// object properties

function observe1(obj) {
  for (let key in obj) {
    let v = obj[key];
    if (isObj(v) === "Object") {
      observe1(v);
    }
    Object.defineProperty(obj, key, {
      get() {
        console.log("get property");
        return v;
      },
      set(val) {
        if (val !== v) {
          console.log("set property");
          v = val;
        }
      },
    });
  }
}

observe1(obj);

// obj.arr[2] = "3";
// obj.arr.shift();
// delete obj.a;
// obj.arr = { a: 2 };
// console.log((obj.c.s = 9));
// console.log(obj.arr);
// obj.arr[1] = "1";
// console.log(obj.arr);

// function createProxy(target) {
//   const isObject = (obj) => typeof obj === "object" && obj !== null;

//   return new Proxy(target, {
//     get(target, prop, receiver) {
//       const value = Reflect.get(target, prop, receiver);
//       console.log(`Getting property`);
//       // 如果属性是对象或数组，递归创建代理
//       if (isObject(value)) {
//         return createProxy(value);
//       }
//       return value;
//     },
//     set(target, prop, value, receiver) {
//       console.log(`Setting property`);
//       return Reflect.set(target, prop, value, receiver);
//     },
//   });
// }

// function observe2(obj) {
//   return new Proxy(obj, {
//     get(target, k) {
//       const key = target[k];
//       if (isObj(key)) {
//         return observe2(key);
//       }
//       console.log("get");
//       return target[k];
//     },
//     set(target, k, value) {
//       if (target[k] !== value) {
//         console.log("set", value);
//         target[k] = value;
//       }
//       return true;
//     },
//     deleteProperty(target, k) {
//       delete target[k];
//     },
//   });
// }

// let pox = observe2(obj);

// pox.arr.push(9);
// console.log(pox);
// 示例对象
// let obj2 = {
//   a: 1,
//   b: 2,
//   c: {
//     s: 5,
//   },
//   d: 10,
//   arr: [1, 2, 3],
// };

// 创建代理对象
// let proxyObj = createProxy(obj2);

// 以下是测试代码
// proxyObj.c.s = 0; // 应该打印出获取c属性和设置s属性的操作
// proxyObj.arr.push(4); // 应该打印出获取arr属性，并且对数组方法push的调用
// proxyObj.c.x = 6;
