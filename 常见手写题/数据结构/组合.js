// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。
var combine = function (n, k) {
  const path = [];
  const result = [];
  function DFS(index) {
    if (path.length === k) {
      result.push([...path]);
    }
    for (let i = index; i <= n; i++) {
      path.push(i);
      DFS(i + 1);
      path.pop();
    }
  }
  DFS(1);
  return result;
};

const res = combine(4, 2);
console.log(res);

/**
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，、
 * 并以列表形式返回。你可以按 任意顺序 返回这些组合。
candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
 */

var combinationSum = function (candidates, target) {
  const path = [];
  const result = [];
  function DFS(j, sum) {
    if (sum === target) {
      result.push([...path]);
    }
    for (let i = j; i < candidates.length; i++) {
      const n = candidates[i];
      if (n > target - sum) break;
      path.push(n);
      sum += n;
      DFS(i, sum);
      path.pop();
      sum -= n;
    }
  }
  DFS(0, 0);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
