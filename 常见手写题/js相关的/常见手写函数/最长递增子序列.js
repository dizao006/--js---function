//最长递增子序列
function lengthOfLIS(numbs) {
  if (numbs.length == 0) return [];
  let result = [[numbs[0]]]; // 初始化第一个二维数组
  for (let i = 1; i < numbs.length; i++) {
    let n = numbs[i]; //拿到每个值依次去更新
    updata(n);
  }
  function updata(n) {
    for (let k = result.length - 1; k >= 0; k--) {
      // 倒叙遍历，因为queue最后一个数组为最新的最长子序列数组
      let lin = result[k];
      let val = lin[lin.length - 1]; //拿到最新的最长子序列的最后一个值
      if (n > val) {
        result[k + 1] = [...lin, n]; //如果最后一个值比当前传入的要小，则新开一个数组，将新值放入
        break; //结束当前循环，下次循环从最新的最长子序列数组来进行比较
      } else if (n < val && k == 0) {
        //如果 当前传入的值比val小，并且k为0的情况下，则赋值给第一个
        result[0] = [n];
      }
    }
  }
  return result;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
