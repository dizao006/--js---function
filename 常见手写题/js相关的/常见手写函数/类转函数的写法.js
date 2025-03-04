"use strict";
// class Example {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age; //
//   }
//   // 修改name,传入一个值进行修改
//   func() {
//     console.log(this.name);
//   }
// }

// 类转换为函数的写法
function Example(name, age) {
  if (!new.target) {
    throw new Error("必须使用new来调用");
  }
  this.name = name;
  this.age = age;
}

Object.defineProperty(Example.prototype, "func", {
  value: function () {
    if (new.target) {
      throw new Error("不能使用new来调用");
    }
    console.log(this.name);
  },
  enumerable: false, // 不可枚举
});

const example = new Example("张三", 18);
example.func();
