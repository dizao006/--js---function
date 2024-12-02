function unflattenObject(data) {
  let obj = {};
  for (const key in data) {
    let keys = key.split(".");
    let tmp = obj;
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        tmp[keys[i]] = data[key];
        break;
      }
      //   if (!Object.hasOwnProperty.call(tmp, keys[i])) {
      //     tmp[keys[i]] = {}; //考虑原型上是否存在这个属性
      //   }
      tmp[keys[i]] = {}; //不考虑
      tmp = tmp[keys[i]];
    }
  }

  return obj;
}

let testObj = {
  "a.b.c": 1,
  "d.e": [2, 3],
};

console.log(unflattenObject(testObj)); // 输出：{ a: { b: { c: 1 } }, d: { e: [2,3] } }
// 对象扁平化
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

const flattened = flattenObject(nestedObject);

function flattenObject(obj) {
  let res = {};
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      let newObj = flattenObject(value);
      Object.keys(newObj).forEach((item) => {
        let str = `${key}.${item}`;
        res[str] = newObj[item];
      });
    } else {
      res[key] = value;
    }
  }
  return res;
}
console.log(flattened);
