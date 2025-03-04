// export class Person {
//   private name: string;
//   private age: number;
//   private static instance: Person;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   public static getInstance(name: string, age: number) {
//     if (Person.instance === null) {
//       Person.instance = new Person(name, age);
//     } else {
//       return Person.instance;
//     }
//   }
// }
// const p1 = Person.getInstance("tom", 18);
// const p2 = Person.getInstance("tom2", 19);
// console.log("====================================");
// console.log(p1 === p2);
// console.log("====================================");

// export class Person {
//   age: number = 18;
//   static hasInstance;
//   constructor(public name: string) {
//     if (Person.hasInstance) {
//       return Person.hasInstance;
//     }
//     Person.hasInstance = this;
//   }
// }

// const s1 = new Person("1");
// const s2 = new Person("2");
// console.log("====================================");
// console.log(s1, s2);
// console.log("====================================");
