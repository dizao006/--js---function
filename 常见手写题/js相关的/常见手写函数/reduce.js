Array.prototype.myReduce = function (callback, number) {
  number = number != undefined ? number : this[0];
  for (let i = 0; i < this.length; i++) {
    number = callback(number, this[i], i, this);
  }
  return number;
};

let arr = [1, 2, 3, 4, 5, 6];
let res = arr.myReduce((a, b) => a + b, 0);
console.log("====================================");
console.log(res);
console.log("====================================");
