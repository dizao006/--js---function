function addSum(arr) {
  let len = arr.length;
  if (len === 0) return 0;
  return arr[0] + addSum(arr.slice(1));
}

console.log(addSum([1, 2, 3, 4, 6, 8, 10, 9]));

let arrs = Array.from({ length: 10 }, () => 1);
console.log(arrs);
