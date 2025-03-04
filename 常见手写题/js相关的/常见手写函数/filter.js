Array.prototype.MyFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    let data = callback(this[i], i, this);
    data && result.push(this[i]);
  }
  return result;
};

let arr = [1, 2, 3, 4, 5, 6, 7];

let arr2 = arr.MyFilter((e) => {
  return e < 6;
});
console.log(arr2);
