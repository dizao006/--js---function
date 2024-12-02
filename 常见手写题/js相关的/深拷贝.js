function deepCopy(obj) {
  let result;
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      result = [];
      for (const ele of obj) {
        result.push(deepCopy(e));
      }
    } else if (obj instanceof RegExp || obj.prototype === Date) {
      result = obj;
    } else {
      let result = {};
      for (const ele in obj) {
        result[ele] = deepCopy(obj[ele]);
      }
    }
  } else {
    result = obj;
  }
  return result;
}

let stu = {
  name: "s",
  deepStu: {
    a: 2,
  },
  say() {
    console.log("asd");
  },
};

let newStu = deepCopy(stu);
console.log("====================================");
console.log(Object.is(newStu, stu));
console.log("====================================");

//但是注意，此方法无法克隆函数
const stu3 = window.structuredClone(stu);
console.log("====================================");
console.log(Object.is(stu3, stu));
console.log("====================================");
