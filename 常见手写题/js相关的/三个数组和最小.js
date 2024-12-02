let arr1 = [-1, -4, 5, 6, 1, 3];
let arr2 = [-5, -3, -6, 9, 10, 7];
let arr3 = [-2, -3, 5, 6, 7, 8];

function sum(arr1, arr2, arr3) {
  let result = Infinity;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        let sum =
          Math.abs(arr1[i] - arr2[j]) +
          Math.abs(arr1[i] - arr3[k]) +
          Math.abs(arr2[j] - arr3[k]);
        result = Math.min(result, sum);
      }
    }
  }
  console.log(result);
}
sum(arr1, arr2, arr3);
