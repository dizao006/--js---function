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

Object.prototype.toString.apply(this).slice(-8, 1);
function isObjectVal(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null)
    return false;
  let aVal = Object.keys(a);
  let bVal = Object.keys(b);
  if (aVal.length !== bVal.length) return false;
  for (let key of aVal) {
    if (typeof a[key] === "object" || typeof b[key] === "object") {
      if (!isObjectVal(a[key], b[key])) return false;
      //   return isObjectVal(a[key], b[key]);
    } else if (a[key] !== b[key]) return false;
  }
  return true;
}
console.log(isObjectVal(a, b));
