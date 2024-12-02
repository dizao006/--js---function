// 算法题：字符串重命名。
// 举例 ，输入["ab","c","ab","c","a","d"]，
// 输出["ab1","c1","ab2","c2","a","d"]，
// 输出不可以改变原有顺序，不重复的字符串不动。

function renameStrings(arr) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      let index = result.indexOf(arr[i]);
      result[index] = `${arr[i]}1`;
      let num = map.get(arr[i]) + 1;
      map.set(arr[i], num);
      result.push(`${arr[i]}${num}`);
    } else {
      map.set(arr[i], 1);
      result.push(`${arr[i]}`);
    }
  }
  return result;
}

console.log(renameStrings(["ab", "c", "ab", "c", "a", "d"]));
