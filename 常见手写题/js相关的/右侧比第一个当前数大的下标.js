function find(arr) {
  let result = new Array(arr.length).fill(-1);
  let stack = []; //存放的下标
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      result[stack.pop()] = i;
    }
    stack.push(i);
  }
  console.log(result);
}

console.log(find([2, 1, 2, 4, 3]));
// 输出：[3, 2, 3, -1, -1]

function findFirstGreaterIndex(arr) {
  let result = new Array(arr.length).fill(-1); // 初始化结果数组，默认值为-1
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        result[i] = j; // 设置结果数组中对应的位置为该数的下标
        break; // 找到后退出内层循环
      }
    }
  }
  return result;
}

console.log(findFirstGreaterIndex([2, 1, 2, 4, 3]));
