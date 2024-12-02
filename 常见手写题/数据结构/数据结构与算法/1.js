// function reverse(nums, start, end) {
//   while (start < end) {
//     [nums[start], nums[end]] = [nums[end], nums[start]];
//     start++;
//     end--;
//   }
// }
// var rotate = function (nums, k) {
//   //   k %= nums.length;
//   //   if (k === 0) {
//   //     return;
//   //   }
//   //   nums.unshift(...nums.splice(-k, k));

//   k %= nums.length;
//   reverse(nums, 0, nums.length - 1);
//   reverse(nums, 0, k - 1);
//   reverse(nums, k, nums.length - 1);
// };

// nums = [1, 2, 3, 4, 5, 6, 7];

// rotate(nums, 3);

// var maxProfit = function (prices) {
//   // 方式一 一次循环,更新最小价格,然后通过比较最大利润与新的利润进行替换
//   //   let minPrice = Infinity;
//   //   let maxProfit = 0;
//   //   for (let i = 0; i < prices.length; i++) {
//   //     minPrice = Math.min(minPrice, prices[i]);
//   //     if (maxProfit < prices[i] - minPrice) {
//   //       maxProfit = prices[i] - minPrice;
//   //     }
//   //   }
//   //   return maxProfit;
//   //   方式二
//   let money = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     if (prices[i] < prices[i + 1]) {
//       money += prices[i + 1] - prices[i];
//     }
//   }
//   console.log("====================================");
//   console.log(money);
//   console.log("====================================");
// };
// prices = [4, 3, 6, 8, 10, 2];
// maxProfit(prices);

// /**
//  * @param {number[]} citations
//  * @return {number}
//  */
// var hIndex = function (citations) {
// const neCis = citations.sort((a, b) => b - a);
// let index = 0;
// for (let i = 0; i < neCis.length; i++) {
//   if (neCis[i] > i) {
//     index = i + 1;
//   } else {
//     break;
//   }
// }
// return index;
//方法二 二分查找
//   const n = citations.length;
//   let l = 0,
//     r = n;
//   while (l <= r) {
//     // 使用 l < r 作为循环条件
//     let mid = Math.floor(l + (r - l) / 2); // 使用 Math.floor 确保mid是整数
//     let count = 0;
//     for (let e of citations) {
//       // 使用for...of循环替代forEach，以便可以在必要时提前退出循环
//       if (e >= mid) count++;
//     }
//     if (count >= mid) {
//       l = mid + 1; // 如果 count >= mid，则尝试更大的值
//     } else {
//       r = mid - 1; // 如果 count < mid，则尝试更小的值，不需要减1，因为mid已经被检查过是不符合条件的
//     }
//   }
//   console.log(r);
//   return r; // 当循环结束时，r 将是最大的符合条件的H指数
// };

// citations = [100];
// // 至少存在一篇文章引用次数大于1
// // 至少存在两篇文章引用次数大于2
// // 至少存在三篇文章引用次数大于3
// // 不存在四篇文章的引用次数大于4
// // 故h为3
// hIndex(citations);
//分发糖果

// /**
//  *
//  * @param {number[]} ratings
//  * @return {number}
//  */
// var candy = function (ratings) {
//   const left = new Array(ratings.length).fill(0);
//   for (let i = 0; i < ratings.length; i++) {
//     if (i > 0 && ratings[i] > ratings[i - 1]) {
//       left[i] = left[i - 1] + 1;
//     } else {
//       left[i] = 1;
//     }
//   }
//   console.log("====================================");
//   console.log(left);
//   console.log("====================================");
//   for (let i = ratings.length - 2; i >= 0; i--) {
//     if (ratings[i] > ratings[i + 1]) {
//       console.log(ratings[i], ratings[i + 1]);
//       left[i] = Math.max(left[i], left[i + 1] + 1);
//     }
//   }
//   console.log(left);
//   return left.reduce((a, b) => a + b, 0);
// };
// ratings = [1, 3, 2, 2, 1];

// console.log(candy(ratings));

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   //方式一 ，提前存储最大值，计算该位置的最大储水量
//   // 每个位置可以接的雨水量取决于它左右两侧的最大高度中的较小值。
//   //这是因为水会从两侧的较低端溢出，而当前位置的高度决定了容器的高度。
//   // 通过提前计算好每个位置左侧和右侧的最大高度，我们可以有效地计算出每个位置可以接的雨水量
//   const n = height.length;
//   if (n == 0) {
//     return 0;
//   }

//   //从左往右看   当前位置从做往右看的最大值
//   let leftMax = new Array(n).fill(0);
//   leftMax[0] = Math.max(leftMax[0], height[0]);
//   for (let i = 1; i < n; i++) {
//     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
//   }

//   //从右往左看，当前位置的最大值
//   let rightMax = new Array(n).fill(0);
//   rightMax[n - 1] = Math.max(rightMax[n - 1], height[n - 1]);
//   for (let i = n - 2; i >= 0; i--) {
//     rightMax[i] = Math.max(rightMax[i + 1], height[i]);
//   }
//   //根据当前位置的最小值减去当前的值，得到具体能存水的数值
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     result += Math.min(leftMax[i], rightMax[i]) - height[i];
//   }
//   return result;
// };

// height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log(trap(height));

//未完 第二种，双指针
// var trap = function (height) {
//   let result = 0;
//   let left = 0;
//   let right = height.length - 1;
//   let leftMax = 0,
//     rightMax = 0;
//   while (left < right) {
//     leftMax = Math.max(height[left], leftMax);
//     rightMax = Math.max(height[right], rightMax);
//     if (leftMax < rightMax) {
//       result = result + leftMax - height[left];
//       left++;
//     } else {
//       result = result + rightMax - height[right];
//       right--;
//     }
//   }
//   return result;
// };

// height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log(trap(height));

/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function (s) {
//   const symbolValues = new Map();
//   symbolValues.set("I", 1);
//   symbolValues.set("V", 5);
//   symbolValues.set("X", 10);
//   symbolValues.set("L", 50);
//   symbolValues.set("C", 100);
//   symbolValues.set("D", 500);
//   symbolValues.set("M", 1000);
//   let result = 0;
//   let n = s.length;
//   for (let i = 0; i < n; i++) {
//     let value = symbolValues.get(s[i]);
//     if (value < symbolValues.get(s[i + 1])) {
//       result += -value;
//     } else {
//       result += value;
//     }
//   }
//   return result;
// };

// romanToInt("III");

//变种

/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function (num) {
//   //方法一，存储额外以9和4开头键值对的map，然后遍历数组取最大值，直到小于给定值
//   const map = new Map();
//   map.set(1000, "M");
//   map.set(900, "CM");
//   map.set(500, "D");
//   map.set(400, "CD");
//   map.set(100, "C");
//   map.set(90, "XC");
//   map.set(50, "L");
//   map.set(40, "XL");
//   map.set(10, "X");
//   map.set(9, "IX");
//   map.set(5, "V");
//   map.set(4, "IV");
//   map.set(1, "I");
//   let result = "";
//   for (const e of map) {
//     while (num >= e[0]) {
//       result += e[1];
//       num = num - e[0];
//     }
//   }
//   return result;

// 方法二，直接定义个十百千的数组，通过取余的方式了确定在数组中的位置
// const thousands = ["", "M", "MM", "MMM"];
// const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
// const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
// const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
// return (
//   thousands[Math.floor(num / 1000)] +
//   hundreds[Math.floor((num % 1000) / 100)] +
//   tens[Math.floor((num % 100) / 10)] +
//   ones[num % 10]
// );
// };

// console.log(intToRoman(58));

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function (s) {
//   let i = s.length - 1;
//   let result = 0;
//   if (s[i] === " ") {
//     while (s[i] === " ") {
//       i--;
//     }
//   }

//   while (s[i] !== " " && i >= 0) {
//     result++;
//     i--;
//   }
//   return result;
// };

// console.log("====================================");
// console.log(lengthOfLastWord("a"));
// console.log("====================================");

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//   // if (!strs.length) return "";
//   // let res = strs[0];
//   // for (ch of strs) {
//   //   for (let i = 0; i < res.length; i++) {
//   //     if (ch[i] !== res[i]) {
//   //       res = res.slice(0, i);
//   //       break;
//   //     }
//   //   }
//   // }
//   // return res;

//   if (!strs.length) return "";
//   // let res = strs[0];
//   // for (let ch of strs) {
//   //   for (let i = 0; i < res.length; i++) {
//   //     if (ch[i] !== res[i]) {
//   //       res = res.slice(0, i);
//   //       break;
//   //     }
//   //   }
//   // }
//   // return res;
//   const arr = strs.sort();
//   let start = arr[0];
//   let end = arr[strs.length - 1];
//   let i = 0;
//   while (start[i] === end[i]) {
//     i++;
//   }
//   return start.slice(0, i);
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {
//   // 初始化一个空数组 res 用于存储反转后的单词
//   let res = [];
//   let fast = s.length - 1;
//   let slow = fast;

//   while (fast >= 0) {
//     // 跳过字符串末尾的空格
//     while (fast >= 0 && s[fast] === " ") {
//       fast--;
//     }
//     // 找到单词的末尾
//     slow = fast;
//     // 找到单词的开始
//     while (fast >= 0 && s[fast] !== " ") {
//       fast--;
//     }
//     //将单词push到数组中去
//     if (fast !== slow) {
//       res.push(s.slice(fast + 1, slow + 1));
//     }
//   }
//   // join拼接字符串
//   return res.join(" ");
// };

// console.log("====================================");
// console.log(reverseWords("hello world"));
// console.log("====================================");

// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function (s, numRows) {
//   if (numRows === 1) return s;
//   let arr = new Array(numRows).fill("");
//   let index = 0; //当前行数
//   let isTop = false; //方向
//   for (let i = 0; i < s.length; i++) {
//     arr[index] += s[i];
//     if (index === 0 || index === numRows - 1) {
//       isTop = !isTop;
//     }
//     index += isTop ? 1 : -1;
//   }
//   return arr.join("");
// };
// //PINALSIGYAHRPI
// console.log("====================================");
// console.log(convert("PAYPALISHIRING", 4));
// console.log("====================================");

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isSubsequence = function (s, t) {
//   // let n = s.length,
//   //   m = t.length;
//   // let i = 0,
//   //   j = 0;
//   // while (i < n && j < m) {
//   //   if (s[i] == t[j]) {
//   //     i++;
//   //   }
//   //   j++;
//   // }
//   // return i == n;
//   let n = s.length;
//   let j = t.length;
//   let i = 0,
//     m = 0;
//   while (i < n && m < j) {
//     if (s[i] !== t[m]) {
//       i++;
//     }
//     m++;
//   }
//   return i == n;
// };

// console.log(isSubsequence("abc", "ahbgdc"));

// var maxArea = function (height) {
//   let max = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = 1; j < height.length; j++) {
//       let fill = Math.min(height[i], height[j]) * (j - i);
//       max = Math.max(max, fill);
//     }
//   }
//   return max;
// };

// console.log("====================================");
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log("====================================");

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   const num = nums.sort((a, b) => a - b);
//   let L = 0;
//   let R = num.length - 1;
//   let arr = [];
//   while (L < R) {
//     let cha = nums[L] + nums[R];
//     for (let i = L; i < R; i++) {
//       if (num[i] === -cha) {
//         arr.push([num[i], num[L], num[R]]);
//       }
//     }
//     if (cha < 0) {
//       L++;
//     } else {
//       R--;
//     }
//   }

//   let s = new Set(arr.map((e) => JSON.stringify(e)));
//   return Array.from(s).map((e) => JSON.parse(e));
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

//前序+中序还原二叉树
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// var buildTree = function (preorder, inorder) {
//   // 前序 根--->左----->右
//   // 中序 左--->根----->右
//   if (!preorder.length || !inorder.length) return null;
//   let root = new TreeNode(preorder[0]);
//   let index = inorder.indexOf(root.val);

// preorder.slice(1, index + 1),表示从根节点的下一个节点开始到index+1 存在这么多是左子树的个数
//  inorder.slice(0, index) inorder.slice(0, index) 从index分界，左边为左子树，右边为右子树

//   root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
//   root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
//   return root;
// };

// console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

//中序加后续还原二叉树

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }
// var buildTree = function (inorder, postorder) {
//   // 中序 左--->根----->右
//   // 后续 左--->右----->根
//   if (!inorder.length || !postorder.length) return null;
//   let root = new TreeNode(postorder[postorder.length - 1]);
//   let index = inorder.indexOf(root.val);

//   //注意slice左闭右开

//   //inorder.slice(0, index) 从index分界，左边为左子树，右边为右子树
//   //postorder.slice(0, index) 0到index表示在后续遍历这个数组中存在index的左子树，所以使用slice(0, index)将后序遍历中的左子树截取出来

//   root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
//   //   inorder.slice(index + 1),右边的为右子树
//   //   postorder.slice(index, postorder.length - 1) //从index到postorder.length - 1最后是右子树的数据

//   root.right = buildTree(
//     inorder.slice(index + 1),
//     postorder.slice(index, postorder.length - 1)
//   );

//   return root;
// };
// console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));

// /**
//  * @param {_Node} root
//  * @return {_Node}
//  */
// var connect = function (root) {
//     if (!root) return null
//     const queue = [root]
//     while (queue.length) {
//         const len = queue.length
//         for (let i = 0; i < len; i++) {
//             queue[i].next = queue[i + 1] ? queue[i + 1] : null
//         }
//         for (let i = 0; i < len; i++) {
//             const node = queue.shift()
//             node.left && queue.push(node.left)
//             node.right && queue.push(node.right)
//         }
//     }
//     return root
// };
// console.log("====================================");
// console.log(connect([1, 2, 3, 4, 5, null, 7]));
// console.log("====================================");

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// var lowestCommonAncestor = function (root, p, q) {
//   if (p < root.val && q < root.val) {
//     return lowestCommonAncestor(root.left, p, q);
//   }
//   if (p > root.val && q > root.val) {
//     return lowestCommonAncestor(root.right, p, q);
//   }
//   return root;
// };


