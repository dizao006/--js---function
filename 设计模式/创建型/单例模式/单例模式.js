//创建型模式的一种
//保证一个类仅仅只有一个实例对象，并且提供一个对该实例对象的全局访问点
//保证全局只有一个实例，无论创建多少个实例对象，都始终指向同一个实例

//js方式实现
//借助辅助方法实现单例

function getSingle(fn) {
  let instance = null; // 用于存储单例实例的变量
  return function (...args) {
    // 返回一个新的函数，该函数接收任意数量的参数
    if (instance != null) {
      // 如果已经创建了实例
      return instance; // 直接返回这个实例
    } else {
      instance = new fn(...args); // 如果没有实例，使用提供的参数创建一个新的实例
      return instance; // 返回新创建的实例
    }
  };
}

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `hello ${this.name}`;
  }
}

const p1 = new Person();
const p2 = new Person();
console.log(p1 === p2);

const instPerson = getSingle(Person);
const p3 = new instPerson("Alice");
const p4 = new instPerson("Bob");
console.log(p3, p4);
