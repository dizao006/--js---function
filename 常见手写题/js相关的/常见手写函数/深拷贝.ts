// function deepClone2(obj) {
//   return new Promise((resolve, reject) => {
//     const { port1, port2 } = new MessageChannel();
//     port1.postMessage(obj);
//     port2.onmessage = (event) => {
//       resolve(event.data);
//     };
//   });
// }
// const obj2 = {
//   a: 1,
//   b: 2,
//   // c: function () {
//   //   console.log("a");
//   // },
//   d: null,
// };
// obj2.d = obj2;

// deepClone2(obj2).then((e) => {
//   console.log(e);
//   console.log(e === obj2);
// });

// 标准做法
/**
 * 深拷贝
 * @param {*} obj
 * @returns
 */
function deepClone(obj: any, cache = new WeakMap()) {
  // 1先考虑是否可以用到structuredClone
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  // 2在进行判断是否不是对象或为null    函数的话也会在这里进行处理
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  // 处理循环引用所以采用weakMap做缓存
  const cached = cache.get(obj);
  if (cached) {
    return cached;
  }
  // 4处理特殊类型
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Map) {
    const cloneMap = new Map();
    cache.set(obj, cloneMap);
    obj.forEach((value, key) => {
      cloneMap.set(key, deepClone(value));
    });
    return cloneMap;
  }
  if (obj instanceof Set) {
    const cloneSet = new Set();
    cache.set(obj, cloneSet);
    obj.forEach((value) => {
      cloneSet.add(deepClone(value));
    });
    return cloneSet;
  }
  // 3先处理正常情况，也就是对象和数组
  let result = Array.isArray(obj) ? [] : {};
  cache.set(obj, result);
  Object.setPrototypeOf(result, Object.getPrototypeOf(obj)); // 继承原型链上的属性
  Reflect.ownKeys(obj).forEach((key) => {
    // 使用Reflect.ownKeys()方法获取所有的键，包括不可枚举的键和Symbol键
    if (obj.hasOwnProperty(key)) {
      //是否为自有属性,排除原型上的属性
      result[key] = deepClone(obj[key]);
    }
  });
  return result;
}

// 测试代码
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
  function Person(this: any, name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    return `Hello, ${this.name}`;
  };
  const person = new Person("Alice");
  const clonedPerson = deepClone(person);
  console.log(clonedPerson !== person); // true (新对象)
  console.log(clonedPerson.name === person.name); // true (属性值相同)
  // console.log(clonedPerson.greet() === "Hello, Alice"); // true (原型方法舍弃/保留)

  // 8. 测试相同引用
  const sharedObj = { data: 1 };
  const container = { obj1: sharedObj, obj2: sharedObj };
  const clonedContainer = deepClone(container);
  console.log(clonedContainer.obj1 === clonedContainer.obj2); // true (保持相同引用)
}

testDeepClone();
