function quickSort(arr: number[]): number[] {
  if (arr.length === 0) return arr;
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
