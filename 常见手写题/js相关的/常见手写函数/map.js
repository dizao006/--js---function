Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let data = callback(this[i], i, this);
    result.push(data);
  }
  return result;
};
Array.prototype.myforEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

let arr = [1, 2, 3, 4, 5];
let result = arr.myMap((item, index, arr) => {
  return item * 2;
});
console.log(result);
