function quickly(arr) {
  if (arr.length == 0) {
    return arr;
  }
  let left = [];
  let right = [];
  const mid = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  left = quickly(left);
  right = quickly(right);
  return [...left, mid, ...right];
}

const reslut = quickly([1, 12, 34, 345, 12, 1, 345, 3654, 234, 5243, 243]);
console.log(reslut);
