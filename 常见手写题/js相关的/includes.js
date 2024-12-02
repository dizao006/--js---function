Array.prototype.Myincludes = function (data, index = 0) {
  if (this.length < 0) return false;
  if (index < 0) index = this.length + index;
  for (let i = index; i < this.length; i++) {
    if (this[i] === data) return true;
  }
  return false;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.Myincludes(6, -3));
