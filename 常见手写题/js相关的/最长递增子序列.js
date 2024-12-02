//最长递增子序列

function lengthOfLIS(numbs) {
  if (numbs.length == 0) return [];
  let result = [[numbs[0]]];
  function updata(n) {
    for (let k = result.length - 1; k >= 0; k--) {
      let lin = result[k];
      let val = lin[lin.length - 1];
      if (n > val) {
        result[k + 1] = [...lin, n];
        break;
      } else if (n < val && k == 0) {
        result[0] = [n];
      }
    }
  }

  for (let i = 1; i < numbs.length; i++) {
    let n = numbs[i];
    updata(n);
  }
  return result;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
