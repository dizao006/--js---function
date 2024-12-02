const str = ` 1 21    3
4 5  6
7   8 9 `; /* 多行字符串要用反引号 */
var arr = str.split("\n"); /* 根据换行符分割 */
let result = [];

let reg = /\d+/g;
for (let i = 0; i < arr.length; i++) {
  let data = arr[i].match(reg);
  result.push(data.map((e) => +e)); /* 转为数字并添加到结果数组 */
  //   let data = arr[i].trim().split(" ");
  //   result.push(data.filter((e) => e != ""));
}

console.log(result); /* 打印结果 */
