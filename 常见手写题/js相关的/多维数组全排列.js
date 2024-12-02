// 回溯算法
function permute(arr) {
  let path = [];
  let result = [];
  let n = arr.length;
  function DFS(index) {
    if (path.length === n) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
      path.push(arr[index][i]);
      DFS(index + 1);
      path.pop();
    }
  }
  DFS(0);
  return result;
}

let testArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(permute(testArr));

// 求集合单词组合起来的不同结果，集合中的单词不重复，每个结果包含所有单词
function permute2(arr) {
  let path = [];
  let restult = [];
  function DFS(index) {
    if (path.length === arr.length) {
      restult.push([...path]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (path.includes(arr[i])) {
        continue;
      }
      path.push(arr[i]);
      DFS(index + 1);
      path.pop();
    }
  }
  DFS(0);
  console.log(restult);
}

permute2(["a", "b", "c", "d", "e"]);
