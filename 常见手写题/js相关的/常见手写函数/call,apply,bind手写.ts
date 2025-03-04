Function.prototype.call = function (context, ...args) {
  const key = Symbol("key");
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};

Function.prototype.apply = function (context, arr) {
  const key = Symbol("key");
  context[key] = this;
  const result = context[key](...arr);
  delete context[key];
  return result;
};

Function.prototype.bind = function (context, args) {
  const that = this;
  return function (...args2) {
    const key = Symbol("key");
    context[key] = that;
    const result = context[key]([...args, ...args2]);
    delete context[key];
    return result;
  };
  //   return function (...args2) {
  //     return this.apply(that, [...args, ...args2]);
  //   };
};
