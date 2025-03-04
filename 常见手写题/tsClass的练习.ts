export {};
// public 公共的
// protected 受保护的 仅能在子类和类中访问
// private 或者 # 私有属性 仅能在类的内部中访问，子类也无法访问
// readonly 只读的 仅能在构造函数中赋值
// static 静态的 静态属性或方法,不属于实例成员
// abstract 抽象的 抽象类和抽象方法
//

class Person {
  static totl: number = 0;
  constructor(
    public name: string,
    public age: number,
    public sex: string,
    protected phone: string,
    private email: string
  ) {
    Person.totl++; // 没创建一次，就加一
  }
  // 实例方法挂在原型上
  // 静态方法与属性是挂载到类上
  show() {
    console.log(this.name, this.age, this.sex, this.phone, this.email);
  }
  get Email() {
    // 获取私有属性 访问器
    return this.email;
  }
  // 或者写成
  getEmail() {
    return this.email;
  }
  set Email(email: string) {
    // 设置私有属性 访问器
    this.email = email;
  }
  static say() {
    console.log(Person.totl);
  }
}

// 继承具有单继承 多实现 一个子类只能有一个父类
class Student extends Person {
  constructor(
    name: string,
    age: number,
    sex: string,
    phone: string,
    email: string
  ) {
    super(name, age, sex, phone, email);
  }
  // 重写父类的方法 使用override关键字
  // 当然不写override 也可以重写父类的方法，
  //写了用于后续开发者阅读代码时，可以快速识别出是重写父类的方法
  override show() {
    // console.log(this.name, this.age, this.sex, this.phone, this.email);
  }
}
const a1 = new Person("张三", 18, "男", "1234567890", "1234567890@qq.com");
console.log(a1);
a1.show();
console.log(a1.Email);
console.log(Person.totl, "通过这种方式来访问静态成员");
console.log(Person.say(), "静态方法也是这样的");
// a1.phone; //受保护的 均无法通过实例访问
// a1.email; //私有的 均无法通过实例访问

abstract class Animal {
  // 抽象类不能实例化
  // 抽象类可以包含抽象方法和非抽象方法
  // 抽象方法没有实现体
  abstract eat(): void;
  abstract sleep(): void;
}

abstract class Dog extends Animal {
  eat() {
    console.log("狗吃骨头");
  }
  abstract sleep(): void; // 交给子类必须实现
}
class Dog2 extends Dog {
  sleep() {
    console.log("狗睡觉");
  }
}
const d1 = new Dog2();
d1.eat();
d1.sleep();

// 接口本身提供了上层抽象的能力
// 接口的特征，在接口中只能由抽象属性和方法，相当于只能声明结构，不能有具体实现
// 接口不能使用访问修饰符
// 接口可以多实现
// 接口可以继承进行拓展
// 接口可以进行合并，可以同时出现两个重复的名称

interface Person2 {
  name: string;
  age: number;
  sex: string;
  method(name: string): void;
}
interface Person2 {
  // 会进行合并，但必须不能出现冲突
  // 如果出现同键名，则必须保证类型相同
  a: string;
}
const p2: Person2 = {
  name: "张三",
  age: 18,
  sex: "男",
  method(name: string): void {
    console.log(name);
  },
  a: "a",
};

interface Person3 {
  phone: string;
  title: string;
}

// 接口实现  必须实现接口中所有的抽象属性和方法
class Student2 implements Person2, Person3 {
  a: string;
  name: string;
  age: number;
  sex: string;
  phone: string;
  title: string;
  method(name: string): void {
    console.log(name);
  }
}

class CreateInstance<T extends new (...args: any[]) => any> {
  private instance: T;
  constructor(instance: T) {
    this.instance = instance;
  }
  createInstance(args: ConstructorParameters<T>): InstanceType<T> {
    return new this.instance(...args);
  }
}

const c1 = new CreateInstance(Person);
console.log(
  c1.createInstance(["张三", 18, "男", "1234567890", "1234567890@qq.com"])
);
