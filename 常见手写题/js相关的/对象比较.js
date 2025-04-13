let a = {
  c: 2,
  d: 3,
  e: 4,
  f: [1, 2, 3, 4],
  g: {
    ss: 17,
  },
};
let b = {
  c: 2,
  d: 3,
  e: 4,
  f: [1, 2, 3],
  g: {
    ss: 17,
  },
};

function isObj(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}
function isObjectVal(a, b) {
  if (!isObj(a) && !isObj(b) && !Array.isArray(a) && !Array.isArray(b)) {
    return Object.is(a, b);
  }
  // 如果 a 和 b 类型不同，返回 false
  if ((isObj(a) && !isObj(b)) || (Array.isArray(a) && !Array.isArray(b))) {
    return false;
  }
  // 判断是否为数组
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!isObjectVal(a[i], b[i])) return false;
    }
    return true;
  }
  // 如果都是对象的话
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!isObjectVal(a[key], b[key])) return false;
  }
  return true;
}
console.log(isObjectVal(a, b));
