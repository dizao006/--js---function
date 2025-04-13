// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的
// 子序列
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  const queue = [[nums[0]]];
  function update(n) {
    for (let k = queue.length - 1; k >= 0; k--) {
      const line = queue[k];
      const value = line[line.length - 1];
      if (n > value) {
        queue[k + 1] = [...line, n];
      } else if (n < value && k === 0) {
        queue[k] = [n];
      }
    }
  }
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    update(n);
  }
  return queue;
};

// dp写法
var lengthOfLIS2 = function (nums) {
  if (nums.length === 0) return 0;
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(dp);
  return Math.max(...dp);
};
lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]);
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
