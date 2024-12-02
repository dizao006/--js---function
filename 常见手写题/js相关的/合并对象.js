var obj1 = {
  a: 1,
  b: { c: 2, d: 3 },
  e: 4,
  h: { i: 5 },
};

var obj2 = {
  a: 111,
  b: { c: 222, f: 333 },
  g: 444,
  h: 666,
};

// obj1.assign(obj2);
// Object.assign(obj1, obj2);
// console.log(obj1);

function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

function mergeObject(obj1, obj2) {
  let result = { ...obj1 };
  for (let key in obj2) {
    if (isObject(obj2[key]) && isObject(result[key])) {
      result[key] = mergeObject(result[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  console.log(result);
  return result;
}

// mergeObject(obj1, obj2);
