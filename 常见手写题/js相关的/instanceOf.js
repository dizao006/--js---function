function MyistanceOf(left, right) {
  if (typeof left !== "object" || right === null) return false;
  let prop = Object.getPrototypeOf(left);
  while (true) {
    if (!prop) {
      return false;
    }
    if (prop === right.prototype) {
      return true;
    }
    prop = Object.getPrototypeOf(prop);
  }
}

function Person() {}
var p = new Person();
console.log(MyistanceOf(p, Object));
//instanceOf的实现
