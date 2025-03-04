// 为什么使用装饰器模式
// 1. 装饰器模式可以动态地给对象添加功能，而不需要修改原有的代码。
// 2. 关注点分离
// 3. 代码重复
// 4. 装饰器是从下往上执行的
export {};
type Constructor<T = any> = new (...args: any[]) => T; // 使用泛型对类进行约束
// type User = {
//   name: string;
//   age: number;
// };
// function testDecorator<T>(target: Constructor<User>) {
//   console.log(target);
// }
// function testDecorator2(
//   target: any,
//   key: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log(target, "target", key, "key", descriptor, "descriptor");
// }

// @testDecorator
// class A {
//   name: string = "张三";
//   age: number = 18;
//   @testDecorator2
//   method() {
//     console.log("method");
//   }
// }
// const a = new A();
// a.method();

// function testDecorator<T extends Constructor>(target: T) {
//   return class extends target {
//     newProperty: string = "newProperty";
//     hello: string = "override";
//     info() {
//       console.log(this.newProperty, this.hello);
//     }
//   };
// }
// @testDecorator
// class A {
//   name: string = "张三";
//   age: number = 18;
//   show() {
//     console.log(this.name, this.age);
//   }
// }
// const a = new A();
// console.log((a as any).newProperty);

// //属性装饰器
// /**
//  * 属性装饰器
//  * @param target 目标对象 如果是实例属性则表示类的原型，如果是静态属性则表示类本身
//  * @param key 属性名
//  */
// function d(str: any) {
//   // console.log(str);
//   return function testDecorator(target: any, key: string) {
//     // console.log(target, key);
//     target[key] = str; //如果是实例属性，则给到原型上，如果是静态属性，则给到类本身
//   };
// }

// class A {
//   @d("name")
//   public name: string;
//   @d("age")
//   static age: number;
//   @d("id")
//   protected id: number;
//   @d("sex")
//   private sex: string;
//   constructor() {
//     //
//   }
// }
// const a = new A();
// console.log(a);
// console.log(A.prototype);
// console.log(A);

// 方法装饰器
// 参数 如果是实例方法，则target表示类的原型，如果是静态方法，则target表示类本身
// 参数2 方法名
// 参数3 方法描述符
// function d(str: any) {
//   return function (target: any, key: string, descriptor: PropertyDescriptor) {
//     descriptor.value = function () {
//       throw new Error("该方法拒绝使用" + str);
//     };
//   };
// }
// function d2(str: boolean) {
//   return function (target: any, key: string, descriptor: PropertyDescriptor) {
//     descriptor.enumerable = str;
//   };
// }
// function d3(str: any) {
//   return function (target: any, key: string) {
//     target[key] = str;
//   };
// }
// function d4(str: any) {
//   return function (target: any, key: string, descriptor: PropertyDescriptor) {
//     const oldMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       console.log("前置拦截", str);
//       let res = oldMethod.apply(this, ...args);
//       console.log("后置拦截", res);
//       return res + "!";
//     };
//   };
// }
// function d0(target) {
//   console.log(new target(), "target");
// }
// @d0
// class A {
//   @d3("dz")
//   name: string = "张三";
//   @d3(42) //加到了A上
//   static age: number = 18;
//   constructor() {
//     this.name = A.prototype.name;
//   }
//   @d("noUse")
//   method() {
//     console.log("method");
//   }
//   // @testDecorator
//   static method2() {
//     console.log("static method");
//   }
//   @d2(true)
//   method3() {
//     console.log("static method3");
//   }
//   @d4("拦截器")
//   method4() {
//     console.log("执行");
//     return "methods";
//   }
// }
// const a = new A();
// console.log(a);
// console.log(a.method4());
// console.log(a.name);
// console.log(A.age);
// for (const key in a) {
//   console.log(key);
// }
// a.method();
// A.method2();

// 参数访问器
// function d(str: any) {
//   return function (target: any, key: string, index: number) {
//     !target.params && (target.params = {});
//     target.params[index] = str;
//   };
// }

// class A {
//   method1(@d("id") id: number, @d("name") name: string) {
//     console.log("method1");
//   }
// }
// const a = new A();
// a.method1(1, "张三");
// console.log(A.prototype);
import "reflect-metadata";

// 定义元数据
// 1 声明式定义 需要放在具体定义的对象上
// @reflectMetadata(key, value)

// 2 命令式定义 需要使用反射API
// Reflect.defineMetadata(key, value, target, propertyKey);target: 目标对象 原型或者对象本身

// 获取元数据
// Reflect.getMetadata(key, target, propertyKey);
// Reflect.getMetadataKeys(target, propertyKey);
// Reflect.getOwnMetadata(key, target, propertyKey);
// Reflect.getOwnMetadataKeys(target, propertyKey);
// @Reflect.metadata("key1", "value1")

// class A {
//   prop1: string;
//   method1() {}
// }
// Reflect.defineMetadata("key2", "value2", A);
// const a = new A();
// console.log(Reflect.getMetadata("key2", A));
// console.log(Reflect.getMetadataKeys(A));
// console.log(Reflect.getOwnMetadataKeys(A));
// console.log(Reflect.getOwnMetadata("key2", A));

// 声明式工厂
// const calsTypeMataKey = Symbol("key1");
// function ClassType(type: string) {
//   return Reflect.metadata(calsTypeMataKey, type);
// }
// @ClassType("A声明式工厂")

// 命令式工厂
// const calsTypeMataKey = Symbol("key2");
// function ClassType(type: string) {
//   return <T extends Constructor>(target: T) => {
//     Reflect.defineMetadata(calsTypeMataKey, type, target);
//     return target;
//   };
// }

// class A {
//   prop: string;
//   method() {}
// }
// const a = ClassType("A命令式工厂")(A);
// console.log(Reflect.getMetadata(calsTypeMataKey, a));

// 属性和方法的处理
class A {
  @Reflect.metadata("key1", "value1")
  prop1: string;
  prop2: string;

  @Reflect.metadata("key2", "value2")
  method1() {}
  @Reflect.metadata("key3", "value3")
  static method2() {}

  static method3() {}
}
console.log(Reflect.getMetadata("key1", A.prototype, "prop1")); // 注意这里放在了原型上
console.log(Reflect.getMetadata("key2", A.prototype, "method1"));
console.log(Reflect.getMetadata("key3", A, "method2")); // 静态放在类的本身上

// 命令式
Reflect.defineMetadata("key4", "value4", A.prototype, "prop2"); // 实例属性
Reflect.defineMetadata("key5", "value5", A, "method3"); // 静态方法
