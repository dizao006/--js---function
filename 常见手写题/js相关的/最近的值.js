function abort(arr, num) {
  arr.sort((a, b) => a - b);

  let min = Infinity;
  let result;
  for (let i = 0; i < arr.length; i++) {
    let cha = Math.abs(arr[i] - num);
    if (min > cha) {
      min = cha;
      result = arr[i];
    }
  }
  console.log(result);
}

abort([3, 56, 56, 23, 7, 76, -2, 345, 45, 76, 3], 6);
