//创建型模式的一种
//保证一个类仅仅只有一个实例对象，并且提供一个对该实例对象的全局访问点
//保证全局只有一个实例，无论创建多少个实例对象，都始终指向同一个实例
//ts实现

export class Person {
  private static instance: Person; //存储唯一实例
  private name: string;

  private age: number;

  private constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public static getInstance(name: string, age: number): Person {
    if (Person.instance == null) {
      Person.instance = new Person(name, age);
    }
    return Person.instance;
  }
}

const p1 = Person.getInstance("tom", 18);
const p2 = Person.getInstance("tom2", 19);
console.log("====================================");
console.log(p1 === p2);
console.log("====================================");
