Array.prototype.myFlat = function (deep) {
  let result = [];
  deep--;
  for (const ele of this) {
    if (ele instanceof Array && deep >= 0) {
      result.push(...ele.myFlat(deep));
    } else {
      result.push(ele);
    }
  }
  return result;
};

let arr = [
  [1, 2, 3],
  [1, 4],
  [1, 4, [2, 3, 4]],
];
console.log(arr.myFlat(1));
