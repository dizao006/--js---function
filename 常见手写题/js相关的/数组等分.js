let a = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90];
function dengfenthere(arr) {
  let result = Array.from({ length: 3 }, () => ({ sum: 0, arr: [] }));
  let arr2 = arr.sort((a, b) => b - a);
  for (let key of arr2) {
    //始终为最小的那一项追加
    let index = 0;
    if (result[1].sum < result[index].sum) {
      index = 1;
    }
    if (result[2].sum < result[index].sum) {
      index = 2;
    }
    result[index].sum += key;
    result[index].arr.push(key);
  }
  return result;
}

dengfenthere(a);
