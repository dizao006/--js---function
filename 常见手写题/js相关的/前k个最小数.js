// arr是number数组，k是number，返回前k个最小的数字组成的数组，保持相对顺序
// 输入:[1,2,3,4,5,3,2]，3，输出：[1,2,2]
// 输入:[1,2,3,4,5,3,2]，4，输出：[1,2,3,2]
// 输入:[1,2,3,4,5,3,2]，5，输出：[1,2,3,3,2]

function kSmallest(arr, k) {
  let neArr = arr.map((e, index) => {
    return {
      value: e,
      index: index,
    };
  });

  let res = neArr.sort((a, b) => a.value - b.value).slice(0, k);
  res.sort((a, b) => a.index - b.index);
  return res.map((e) => e.value);
}

console.log(kSmallest([1, 2, 3, 4, 5, 3, 2], 5)); // [1, 2, 2]
