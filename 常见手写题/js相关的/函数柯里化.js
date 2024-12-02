function curry(fn) {
  return function _curry(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args); //如果参数的数量满足函数要求，则直接运行
    } else {
      return function (...args2) {
        return _curry.apply(this, args.concat(args2)); //如果不满足
      };
    }
  };
}

function add(x, y, z) {
  return x + y + z;
}
let s = curry(add);
let restult = s(1, 2)(3);
let result = s(1)(2, 3);
console.log(restult, result);
