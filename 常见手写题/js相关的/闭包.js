// before(num,fn)接受两个参数，第一个参数是数字，第二个参数是函数，
//调用before函数num次数以内，返回与fn执行相同的结果，超过num次数返回最后一次fn的执行结果。

function before(num, fn) {
  let coutn = 0;
  let result;
  return function (...arg) {
    if (coutn < num) {
      result = fn(arg);
      coutn++;
    }
    return result;
  };
}
let testFn = function (x) {
  return x * x;
};
let beforeTestFn = before(3, testFn);

console.log(beforeTestFn(2)); // 输出 4
console.log(beforeTestFn(3)); // 输出 9
console.log(beforeTestFn(4)); // 输出 16
console.log(beforeTestFn(5)); // 输出 16，因为已经超过了3次调用，所以返回最后一次执行结果。

//只执行一次的函数
function one(callback) {
  let flag = true;
  return function (...args) {
    if (!flag) return; //如果已经执行了，则直接返回
    flag = false;
    return callback(...args);
  };
}

// 偏函数
/*
在JavaScript中，偏函数（Partial Application）是一种函数式编程技术，它允许你预先填充一个函数的一些参数，从而得到一个新函数，
这个新函数等待剩余的参数被传入后执行。偏函数的应用通常通过创建一个闭包来实现，闭包会“记住”那些预先填充的参数。当你调用这个新函数时
它会使用这些预先填充的参数，以及你提供的任何新参数，来调用原始函数。
*/
function partial(func, ...argsBound) {
  return function (...args) {
    return func.apply(this, argsBound.concat(args));
  };
}

// 示例使用
function add(a, b, c) {
  return a + b + c;
}

// 创建一个偏函数，预先填充参数5和10
const partialAdd = partial(add, 5, 10);

// 调用偏函数，传入剩余的参数3
console.log(partialAdd(3)); // 输出 18
