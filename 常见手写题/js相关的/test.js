//二维数组转置输出
let arr = [
  [1, 2, 3],
  [4, 5, 6],
];

function zhuanzhi(arr) {
  for (let i = 0; i < arr[0].length; i++) {
    let str = "";
    for (let j = 0; j < arr.length; j++) {
      str += arr[j][i] + "\t";
    }
    console.log(str);
  }
}

zhuanzhi(arr);
