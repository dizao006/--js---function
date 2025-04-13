function curry(fn) {
  return function _curry(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return function (...arg2) {
      return _curry.apply(this, args.concat(arg2));
    };
  };
}

function add(x, y, z) {
  return x + y + z;
}
let s = curry(add);
let restult = s(1, 2)(3);
let result = s(1)(2, 3);
console.log(restult, result);
