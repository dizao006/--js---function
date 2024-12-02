function Animo(name) {
  this.name = name;
}

Animo.prototype.getName = function () {
  return this.name;
};

function Dog(name, age) {
  this.age = age;
  Animo.call(this, name);
}

Dog.prototype.getAge = function () {
  return this.age;
};

//原型设置
Reflect.setPrototypeOf(Dog.prototype, Animo.prototype);

let dog = new Dog("ml", 12);
console.log(dog.getName(), dog.getAge());
