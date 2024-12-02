export class Person {
  private name: string;
  private age: number;
  private static instance: Person;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public static getInstance(name: string, age: number) {
    if (Person.instance === null) {
      Person.instance = new Person(name, age);
    } else {
      return Person.instance;
    }
  }
}
const p1 = Person.getInstance("tom", 18);
const p2 = Person.getInstance("tom2", 19);
console.log("====================================");
console.log(p1 === p2);
console.log("====================================");
