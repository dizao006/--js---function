String.prototype.myIndexOf = function (data, index) {
  if (index >= this.length) return -1;
  if (index < 0) index = 0;

  //正则的形式
  let reg = new RegExp(data);
  let neStr = this.slice(index, this.length);
  let exec = reg.exec(neStr);
  return exec ? exec.index + index : -1;

  //快慢指针的形式
  //   let len = data.length;
  //   let left = index;
  //   let right = index + len;
  //   while (right < this.length) {
  //     if (this[left] === data[0]) {
  //       if (data === this.slice(left, right)) {
  //         return left;
  //       }
  //     }
  //     right++;
  //     left++;
  //   }

  //正常的for循环形式
  //   for (let i = index; i < this.length; i++) {
  //     if (data[0] === this[i]) {
  //       let nedata = this.slice(i, i + len);
  //       if (nedata == data) {
  //         return i;
  //       }
  //     }
  //   }
  //   return -1;
};

let str = "abcde chi dog apple";
let ind = str.myIndexOf("dog", 11);
let str2 = "1231231234";
// console.log(str2.indexOf("2", 1));
console.log(ind);
