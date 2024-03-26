"use strict";

Array.prototype.myFind = function (fn) {
  var list = this;

  for (var i = 0; i < list.length; i++) {
    console.log(list[i], i, list);

    if (fn(list[i])) {
      return list[i];
    }
  }

  return undefined;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 12, 15, 16];
console.log(arr.myFind(function (e) {
  return e > 10;
}));