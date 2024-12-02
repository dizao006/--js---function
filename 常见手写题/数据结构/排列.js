/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */
var permute = function (nums) {
  const path = [];
  const result = [];
  function DFS() {
    if (path.length === nums.length) {
      result.push([...path]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue; //区别在这里 如果说当前path已经包含了该数，则跳过当前循环进入下一次循环
      path.push(nums[i]);
      DFS();
      path.pop();
    }
  }
  DFS();
  return result;
};

console.log(permute([1, 2, 3]));
