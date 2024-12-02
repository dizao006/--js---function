// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
//  限制：不可使用 sort 函数 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

function quickSort(arr) {
  if (arr.length === 0) return arr;
  let mid = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  return [...left, mid, ...right];
}

const nums = [3, 2, 1, 1, 3, 4, 2, 5, 6, 4];
let arr2 = quickSort(nums);
function findKmax(arr2, k) {
  return arr2[k];
}
console.log(findKmax(arr2, 3));
