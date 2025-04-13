export {};
function quickSort(arr: number[]): number[] {
  if (arr.length == 0) return arr;
  let left = [];
  let right = [];
  let mid = arr[0];
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

console.log("====================================");
console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log("====================================");

// 二分查找

let arr = [1, 5, 7, 8, 9, 10, 22, 34, 88];
function TwoFind(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (arr[mid] == target) {
      return target;
    }
    if (target < arr[mid]) {
      right = mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    }
  }
  return null;
}
console.log(TwoFind(arr, 1));
