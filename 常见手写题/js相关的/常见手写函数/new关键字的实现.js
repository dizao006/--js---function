function myNew(constructorFn, ...args) {
  // 1. 创建一个空对象，该对象的原型指向构造函数的 prototype 属性
  const obj = Object.create(constructorFn.prototype);

  // 2. 将这个空对象作为 this 上下文绑定到构造函数上，并传入参数
  const result = constructorFn.apply(obj, args);

  // 3. 如果构造函数返回了一个对象，则返回这个对象；否则返回上面创建的对象
  return typeof result === "object" && result !== null ? result : obj;

  // return Reflect.construct(constructorFn, args);
}
// 补充 判断一个是否由new关键字实现的可以有以下几种判断
// 1 instanceOf   propoty等原型的方式
// 2 new.target
// 3 [symbol.hasinstance]
function Animal(name) {
  this.name = name;
}
let animal = myNew(Animal, "dog");
console.log(animal);
