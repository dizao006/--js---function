Function.prototype.call2 = function (context = globalThis, ...arg) {
  let key = Symbol("key");
  context[key] = this;
  const result = context[key](...arg);
  delete context[key];
  return result;
};

function hello(name, message) {
  console.log(`${name} ${message}`);
}

hello.call2(this, "hello", "world");

Function.prototype.apply2 = function (context = window || globalThis, arr) {
  let key = Symbol("key");
  context[key] = this;
  const result = context[key](...arr);
  delete context[key];
  return result;
};

// hello.apply2(this, ["hello", "world"]);

Function.prototype.bind2 = function (context = globalThis, args) {
  let _this = this;
  return function (...args2) {
    context._fn = _this;
    let result = context._fn(...[args, ...args2]);
    delete context._fn;
    return result;
  };

  //   const _this = this;
  //   return function (...args2) {
  //     return _this.apply(context, args.concat(args2));
  //   };
};

// const he = hello.bind2(this, ["hello", "world"]);
// he("test");
