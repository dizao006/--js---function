Array.prototype.myFill = function (value, start = 0, end = this.length) {
  let data = this;
  for (let i = start; i < end; i++) {
    data[i] = value;
  }
  return data;
};

let arr2 = new Array(4).myFill(3, 2, 3);
// let arr = new Array(4).fill(3);
console.log(arr2);
