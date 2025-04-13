// // 深拷贝
// //重新创建内存地址，新的数据不会影响另外的数据
// // 1 JSON.parse(JSON.stringify())
// let stu = {
//   name: "s",
//   deepStu: {
//     a: 2,
//   },
//   say() {
//     console.log("asd");
//   },
// };
// // let stu2 = JSON.parse(JSON.stringify(stu))  //新拷贝的对象会丢失原来的方法
// // stu2.name = 'w'
// // console.log(stu2, stu)

// //递归写深拷贝
// function deepClone(target) {
//   let restult;
//   if (typeof target === "object") {
//     if (Array.isArray(target)) {
//       restult = [];
//       for (const i in target) {
//         restult.push(deepClone(target[i]));
//       }
//     } else if (target == null) {
//       restult = null;
//     } else if (target.constructor === RegExp || target.constructor === Date) {
//       restult = target;
//     } else {
//       //说明是一个对象
//       restult = {};
//       for (const i in target) {
//         restult[i] = deepClone(target[i]);
//       }
//     }
//   } else {
//     restult = target;
//   }
//   return restult;
// }
// let stu2 = deepClone(stu);
// console.log(stu2);
// //浅拷贝
// //只拷贝基本类型的数据，而引用类型复制后也会发生引用，浅拷贝只赋值某个对象的引用类型，而不复制对象本身，共享一块内存
// //1 直接赋值
// // let stu = {
// //     name: 's',
// //     deepStu: {
// //         a: 2
// //     }
// // }
// // let stu2 = stu
// // stu2.name = 'w'
// // console.log(stu.name, stu2.name)

// //2 object.assign
// // Object.assign(stu, {
// //     name: 'w',
// //     age: '20',
// // })
// // console.log(stu)
// // //object.assign浅拷贝
// // let stu2 = Object.assign({}, stu)
// // console.log(stu2)

// //这两个如果知识单纯的数据，其实并没有影响，如果里面存在对象，则会触发浅拷贝
// //展开运算符
// // var stu2 = {
// //     ...stu,
// //     age: '20'
// // }
// // stu2.name = 'w'
// // stu2.deepStu.a = 5
// // console.log(stu2, stu)

// //slice 与concat
// // let arr = [1, 3, 6, {
// //     a: 2
// // }]
// // let arr2 = arr.slice()
// // arr2[0] = 100,
// //     arr2[3].a = 1000
// // console.log(arr, arr2)

// function deepClone(obj) {
//   let result;
//   if (typeof obj === "object") {
//     if (obj instanceof Array) {
//       result = [];
//       for (const key in obj) {
//         result.push(deepClone(obj[key]));
//       }
//     } else if (obj === null) result == null;
//     else if (obj.constructor === RegExp || obj.constructor === Date)
//       result = obj;
//     else {
//       result = {};
//       for (const key in obj) {
//         result[key] = deepClone(obj[key]);
//       }
//     }
//   } else {
//     result = obj;
//   }

//   return result;
// }

// const arr = [1, 3, 4];
// const arr2 = deepClone(arr);
// console.log(arr, arr2);

function deepClone(obj, cache = new WeakMap()) {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  if (typeof obj !== "object" || obj === "null") {
    return obj;
  }
  if (cache.get(obj)) {
    return cache.get(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Map) {
    const cloneMap = new Map();
    cache.set(obj, cloneMap);
    obj.forEach((key, value) => {
      cloneMap.set(key, deepClone(value));
    });
    return cloneMap;
  }
  if (obj instanceof Set) {
    const cloneSet = new Set();
    cache.set(obj, cloneSet);
    obj.forEach((e) => {
      cloneSet.add(deepClone(e));
    });
    return cloneSet;
  }
  const result = Array.isArray(obj) ? [] : {};
  cache.set(obj, result);
  Object.setPrototypeOf(result, Object.getPrototypeOf(obj));
  Reflect.ownKeys(obj).forEach((key) => {
    if (Object.hasOwnPropoty(key)) {
      result[key] = deepClone(obj[key]);
    }
  });
  return result;
}

function testDeepClone() {
  // 1. 测试基本类型
  console.log(deepClone(42) === 42); // true (number)
  console.log(deepClone("hello") === "hello"); // true (string)
  console.log(deepClone(true) === true); // true (boolean)
  console.log(deepClone(null) === null); // true (null)

  // 2. 测试对象和数组
  const obj = { a: 1, b: { c: 2 } };
  const clonedObj = deepClone(obj);
  console.log(clonedObj !== obj); // true (新对象)
  console.log(clonedObj.b !== obj.b); // true (嵌套对象也是新对象)
  console.log(clonedObj.a === obj.a); // true (值相同)

  const arr = [1, { x: 2 }];
  const clonedArr = deepClone(arr);
  console.log(clonedArr !== arr); // true (新数组)
  console.log(clonedArr[1] !== arr[1]); // true (嵌套对象是新对象)

  // 3. 测试循环引用
  const cyclicObj = { self: null };
  cyclicObj.self = cyclicObj;
  const clonedCyclic = deepClone(cyclicObj);
  console.log(clonedCyclic !== cyclicObj); // true (新对象)
  console.log(clonedCyclic.self === clonedCyclic); // true (保持循环引用)

  // 4. 测试特殊对象
  const date = new Date();
  const clonedDate = deepClone(date);
  console.log(clonedDate !== date); // true (新Date对象)
  console.log(clonedDate.getTime() === date.getTime()); // true (时间相同)

  const regex = /abc/g;
  const clonedRegex = deepClone(regex);
  console.log(clonedRegex !== regex); // true (新RegExp对象)
  console.log(clonedRegex.source === regex.source); // true (模式相同)

  // 5. 测试Map和Set
  const map = new Map([["key", { value: 1 }]]);
  const clonedMap = deepClone(map);
  console.log(clonedMap !== map); // true (新Map)
  console.log(clonedMap.get("key") !== map.get("key")); // true (嵌套对象是新对象)

  const set = new Set([{ item: 1 }]);
  const clonedSet = deepClone(set);
  console.log(clonedSet !== set); // true (新Set)
  console.log([...clonedSet][0] !== [...set][0]); // true (嵌套对象是新对象)

  // 6. 测试Symbol属性
  const sym = Symbol("test");
  const objWithSymbol = { [sym]: "symbol value" };
  const clonedObjWithSymbol = deepClone(objWithSymbol);
  console.log(clonedObjWithSymbol[sym] === "symbol value"); // true (Symbol属性被复制)

  // 7. 测试原型链
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    return `Hello, ${this.name}`;
  };
  const person = new Person("Alice");
  const clonedPerson = deepClone(person);
  console.log(clonedPerson !== person); // true (新对象)
  console.log(clonedPerson.name === person.name); // true (属性值相同)
  console.log(clonedPerson.greet() === "Hello, Alice"); // true (原型方法保留)

  // 8. 测试相同引用
  const sharedObj = { data: 1 };
  const container = { obj1: sharedObj, obj2: sharedObj };
  const clonedContainer = deepClone(container);
  console.log(clonedContainer.obj1 === clonedContainer.obj2); // true (保持相同引用)
}

testDeepClone();
