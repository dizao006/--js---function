// // // var jump = function (nums) {
// // //   if (nums.length == 1) return 0;
// // //   let maxPosition = 0; //最大的覆盖范围
// // //   let end = 0; //当前跳跃结束的位置
// // //   let jumps = 0; //跳跃的次数F
// // //   console.log(nums.length - 1);
// // //   for (let i = 0; i < nums.length - 1; i++) {
// // //     maxPosition = Math.max(maxPosition, i + nums[i]);
// // //     if (i === end) {
// // //       jumps++;
// // //       end = maxPosition;
// // //     }
// // //   }
// // //   return jumps;
// // // };

// // // jump([2, 3, 1, 1, 4]);

// // //测试number类型 先调valueof再掉toSTring

// // const obj = {
// //   a: 1,
// //   toString: function () {
// //     return "2";
// //   },
// //   valueOf: function () {
// //     return 1;
// //   },
// // };

// // console.log(Number(obj));

// // // String 测试 先toString 在valueof

// // console.log(String(obj));

// 测试为对象类型
const obj = {
  [Symbol.toPrimitive]: function () {
    return "abc";
  },
  valueOf: function () {
    return "bcd";
  },
  toString: function () {
    return "cde";
  },
};

console.log(obj + 1);

// /**
//  * Definition for a binary tree node.

//  */

// const reslut = [];
// function qian(root) {
//   if (root === null) return null;
//   reslut.push(root.val);
//   qian(root.left);
//   qian(root.right);
// }
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// const root = new TreeNode(5);
// const node1 = new TreeNode(1);
// const node4 = new TreeNode(4);
// const node3 = new TreeNode(3);
// const node6 = new TreeNode(6);
// root.left = node1;
// root.right = node4;
// node4.left = node3;
// node4.right = node6;
// qian(root);
// console.log(reslut);

// const axios = require("axios");

// const source = axios.CancelToken.source();
// console.log(source);

// axios
//   .get("/api/data", {
//     cancelToken: source.token,
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     if (axios.isCancel(error)) {
//       console.log("请求已取消:", error.message);
//     } else {
//       console.error("请求出错:", error);
//     }
//   });

// // 模拟某个条件下需要取消请求，比如用户点击了取消按钮
// source.cancel("用户取消了请求");

// function maxList(arr) {
//   if (arr.length == 0) return 0;
//   const arr2 = arr.sort((a, b) => a - b);
//   console.log(arr2);
//   let left = 0;
//   let right = 1;
//   let rsult = 0;
//   while (right < arr2.length) {
//     if (arr2[right] - arr2[right - 1] !== 1) {
//       rsult = Math.max(rsult, right - left);
//       left = right;
//     }
//     right++;
//   }
//   console.log(left, right);
//   rsult = Math.max(rsult, right - left);
//   console.log(rsult);
// }

// maxList([0, 3, 7, 2, 5, 8, 4, 4, 6, 0, 1]);

// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 示例 1：
// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

// 示例 2：
// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9

// 示例 3：
// 输入：nums = [0,3,7,2,5,8,4,4,6,0,1]
// 输出：5

// var sortColors = function (nums) {
//   const quickly = (nums) => {
//     if (nums.length === 0) return nums;
//     let mid = nums[0];
//     let left = [];
//     let right = [];
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] < mid) {
//         left.push(nums[i]);
//       } else {
//         right.push(nums[i]);
//       }
//     }
//     left = sortColors(left);
//     right = sortColors(right);
//     return [...left, mid, ...right];
//   };
//   return quickly(nums);
// };
// console.log(sortColors([2, 0, 2, 1, 1, 0]));

//给一个字符串，求出包含r和e但不包含d的所有连续字串
// function test(str) {
//   let count = 0;
//   let left = 0;
//   let right = 0;
//   const windowSet = new Set();
//   while (right < str.length) {
//     // 将当前字符加入集合（相当于扩大窗口）
//     windowSet.add(str[right]);
//     // 如果集合中包含'd'，则收缩窗口，直到集合中不再包含'd'
//     while (windowSet.has("d")) {
//       windowSet.delete(str[left]);
//       left++;
//     }
//     // 将集合中的元素拼接成字符串，判断是否包含'r'和'e'
//     const windowStr = [...windowSet].join("");
//     if (windowStr.includes("r") && windowStr.includes("e")) {
//       count++;
//     }
//     right++;
//   }
//   return count;
// }

// let arr = test("raefadreafgdrea");
// console.log(arr);

// function qianzhuihe(count) {
//   if (count === 1) return 1;
//   if (count === 2) return 1;
//   if (count === 3) return 1;
//   let ans = 0;
//   let afterans = 0;
//   for (let i = 1; i < count; i++) {
//     if (ans > count) return afterans;
//     afterans = ans;
//     ans = ans + i ** 2;
//   }
// }
// console.log(ans);
// function test(arr) {
//   let arrs = [];
//   for (let i = 0; i < arr.length; i++) {
//     let ans = qianzhuihe(arr[i]);
//     arrs.push(ans);
//   }
//   console.log(arrs);
// }

// test([3, 9, 80]);

// var dailyTemperatures = function (temperatures) {
//   let left = 0;
//   let arr = [];
//   let right = 0;
//   while (left < temperatures.length) {
//     while (right < temperatures.length) {
//       if (temperatures[right] - temperatures[left] > 0) {
//         arr[left] = right - left;
//         left++;
//         right = left;
//       }
//       right++;
//     }
//     arr[left] = 0;
//     left++;
//     right = left;
//   }
//   return arr;
// };

// dailyTemperatures([30, 40, 50, 60]);

// function printSymmetric(arr) {
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     let spaces = "";
//     for (let j = 0; j < length - i - 1; j++) {
//       spaces += " ";
//     }
//     let lineNums = "";
//     for (let k = i; k < i + (i + 1); k++) {
//       lineNums += arr[k] + " ";
//     }
//     console.log(spaces + lineNums.trim());
//   }
// }
// window.structuredClone
// // 示例用法，你可以替换下面的数组为任意你想要的数组
// const nums = [1, 2, 3, 4, 5];
// printSymmetric(nums);

// setTimeout(() => {
//   console.log("1");
// }, 1);

// const p = new Promise((resolve, reject) => {
//   console.log("2");
//   Promise.resolve("x").then(console.log);
//   resolve(3);
//   Promise.resolve(4).then(console.log);
//   console.log("5");
// }).then(console.log);

// console.log("6");
// const arrs = [1, 2, 3];

// function palie(target) {
//   let path = [];
//   let current = [];
//   function DFS() {
//     if (path.length === 2) {
//       let n = path.reduce((a, b) => a + b, 0);
//       if (n === target) {
//         current.push([...path]);
//       }
//       return;
//     }
//     for (let i = 0; i <= target; i++) {
//       path.push(i);
//       DFS();
//       path.pop();
//     }
//   }
//   DFS();
//   return current;
// }
// // let ss = palie(3);

// var maxScore = function (cardPoints, k) {
//   const arrs = palie(k);
//   let max = 0;
//   for (let i = 0; i < arrs.length; i++) {
//     let leftMax = arrs[i][0] === 0 ? [] : cardPoints.slice(0, arrs[i][0]);
//     let rightMax =
//       arrs[i][1] === 0 ? [] : cardPoints.slice(-arrs[i][1], cardPoints.length);
//     let res = [...leftMax, ...rightMax].reduce((a, b) => a + b, 0);
//     max = Math.max(max, res);
//   }
//   console.log(max);
//   return max;
// };

// maxScore([1, 2, 3, 4, 5, 6, 1], 3);
function swap(a, b) {
  return ([a, b] = [b, a]);
}
console.log(swap(1, 2));
