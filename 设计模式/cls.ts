// class Person {
//   //   #name: string;
//   //   #age: string;
//   public _name: string;
//   private _age: number;

//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }

//   private setName(name: string) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   get age() {
//     return this._age;
//   }
//   set age(value: number) {
//     this._age = value;
//   }
//   public sayHello(): void {
//     console.log("====================================");
//     console.log("hello");
//     console.log("====================================");
//   }
//   private sayName(): void {
//     console.log(this._name);
//   }
// }

// class Student extends Person {
//   private _gender: string;
//   private _score: number;
//   constructor(name: string, age: number, gender: string, score: number) {
//     super(name, age);
//     this._gender = gender;
//     this._score = score;
//   }
//   sayScore(): void {
//     console.log(this._score);
//   }
// }

// const dizao = new Student("dizao", 20, "3", 600);
// dizao.sayHello();
// dizao.sayScore();

// 实现接口
interface IAnimal {
  name: string;
  age: number;
  check(): void;
}

class IDog implements IAnimal {
  name: string;
  age: number;
  check(): void {
    console.log("sss");
  }
}

// abstract 抽象类和抽象方法
abstract class Animal {
  public _name: string;
  constructor(name: string) {
    this._name = name;
  }
  abstract say(): void;
}

class Dog extends Animal {
  public _age: number;
  constructor(name: string, age: number) {
    super(name);
    this._age = age;
  }
  say(): void {
    console.log("====================================");
    console.log(this._name);
    console.log("====================================");
  }
}

const dog = new Dog("陌路", 25);

dog.say();
