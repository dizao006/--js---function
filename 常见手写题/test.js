// // // // var jump = function (nums) {
// // // //   if (nums.length == 1) return 0;
// // // //   let maxPosition = 0; //最大的覆盖范围
// // // //   let end = 0; //当前跳跃结束的位置
// // // //   let jumps = 0; //跳跃的次数F
// // // //   console.log(nums.length - 1);
// // // //   for (let i = 0; i < nums.length - 1; i++) {
// // // //     maxPosition = Math.max(maxPosition, i + nums[i]);
// // // //     if (i === end) {
// // // //       jumps++;
// // // //       end = maxPosition;
// // // //     }
// // // //   }
// // // //   return jumps;
// // // // };

// // // // jump([2, 3, 1, 1, 4]);

// // // //测试number类型 先调valueof再掉toSTring

// // // const obj = {
// // //   a: 1,
// // //   toString: function () {
// // //     return "2";
// // //   },
// // //   valueOf: function () {
// // //     return 1;
// // //   },
// // // };

// // // console.log(Number(obj));

// // // // String 测试 先toString 在valueof

// // // console.log(String(obj));

// // 测试为对象类型
// // const obj = {
// //   [Symbol.toPrimitive]: function () {
// //     return "abc";
// //   },
// //   valueOf: function () {
// //     return "bcd";
// //   },
// //   toString: function () {
// //     return "cde";
// //   },
// // };

// // console.log(obj + 1);

// // /**
// //  * Definition for a binary tree node.

// //  */

// // const reslut = [];
// // function qian(root) {
// //   if (root === null) return null;
// //   reslut.push(root.val);
// //   qian(root.left);
// //   qian(root.right);
// // }
// // function TreeNode(val, left, right) {
// //   this.val = val === undefined ? 0 : val;
// //   this.left = left === undefined ? null : left;
// //   this.right = right === undefined ? null : right;
// // }

// // const root = new TreeNode(5);
// // const node1 = new TreeNode(1);
// // const node4 = new TreeNode(4);
// // const node3 = new TreeNode(3);
// // const node6 = new TreeNode(6);
// // root.left = node1;
// // root.right = node4;
// // node4.left = node3;
// // node4.right = node6;
// // qian(root);
// // console.log(reslut);

// // const axios = require("axios");

// // const source = axios.CancelToken.source();
// // console.log(source);

// // axios
// //   .get("/api/data", {
// //     cancelToken: source.token,
// //   })
// //   .then((response) => {
// //     console.log(response.data);
// //   })
// //   .catch((error) => {
// //     if (axios.isCancel(error)) {
// //       console.log("请求已取消:", error.message);
// //     } else {
// //       console.error("请求出错:", error);
// //     }
// //   });

// // // 模拟某个条件下需要取消请求，比如用户点击了取消按钮
// // source.cancel("用户取消了请求");

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
//   rsult = Math.max(rsult, right - left);
//   console.log(rsult);
// }

// maxList([0, 3, 7, 2, 5, 8, 4, 4, 6, 0, 1]);

// // 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// // 示例 1：
// // 输入：nums = [100,4,200,1,3,2]
// // 输出：4
// // 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

// // 示例 2：
// // 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// // 输出：9

// // 示例 3：
// // 输入：nums = [0,3,7,2,5,8,4,4,6,0,1]
// // 输出：5

// // var sortColors = function (nums) {
// //   const quickly = (nums) => {
// //     if (nums.length === 0) return nums;
// //     let mid = nums[0];
// //     let left = [];
// //     let right = [];
// //     for (let i = 1; i < nums.length; i++) {
// //       if (nums[i] < mid) {
// //         left.push(nums[i]);
// //       } else {
// //         right.push(nums[i]);
// //       }
// //     }
// //     left = sortColors(left);
// //     right = sortColors(right);
// //     return [...left, mid, ...right];
// //   };
// //   return quickly(nums);
// // };
// // console.log(sortColors([2, 0, 2, 1, 1, 0]));

// //给一个字符串，求出包含r和e但不包含d的所有连续字串
// // function test(str) {
// //   let count = 0;
// //   let left = 0;
// //   let right = 0;
// //   const windowSet = new Set();
// //   while (right < str.length) {
// //     // 将当前字符加入集合（相当于扩大窗口）
// //     windowSet.add(str[right]);
// //     // 如果集合中包含'd'，则收缩窗口，直到集合中不再包含'd'
// //     while (windowSet.has("d")) {
// //       windowSet.delete(str[left]);
// //       left++;
// //     }
// //     // 将集合中的元素拼接成字符串，判断是否包含'r'和'e'
// //     const windowStr = [...windowSet].join("");
// //     if (windowStr.includes("r") && windowStr.includes("e")) {
// //       count++;
// //     }
// //     right++;
// //   }
// //   return count;
// // }

// // let arr = test("raefadreafgdrea");
// // console.log(arr);

// // function qianzhuihe(count) {
// //   if (count === 1) return 1;
// //   if (count === 2) return 1;
// //   if (count === 3) return 1;
// //   let ans = 0;
// //   let afterans = 0;
// //   for (let i = 1; i < count; i++) {
// //     if (ans > count) return afterans;
// //     afterans = ans;
// //     ans = ans + i ** 2;
// //   }
// // }
// // console.log(ans);
// // function test(arr) {
// //   let arrs = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     let ans = qianzhuihe(arr[i]);
// //     arrs.push(ans);
// //   }
// //   console.log(arrs);
// // }

// // test([3, 9, 80]);

// // var dailyTemperatures = function (temperatures) {
// //   let left = 0;
// //   let arr = [];
// //   let right = 0;
// //   while (left < temperatures.length) {
// //     while (right < temperatures.length) {
// //       if (temperatures[right] - temperatures[left] > 0) {
// //         arr[left] = right - left;
// //         left++;
// //         right = left;
// //       }
// //       right++;
// //     }
// //     arr[left] = 0;
// //     left++;
// //     right = left;
// //   }
// //   return arr;
// // };

// // dailyTemperatures([30, 40, 50, 60]);

// // function printSymmetric(arr) {
// //   const length = arr.length;
// //   for (let i = 0; i < length; i++) {
// //     let spaces = "";
// //     for (let j = 0; j < length - i - 1; j++) {
// //       spaces += " ";
// //     }
// //     let lineNums = "";
// //     for (let k = i; k < i + (i + 1); k++) {
// //       lineNums += arr[k] + " ";
// //     }
// //     console.log(spaces + lineNums.trim());
// //   }
// // }
// // window.structuredClone
// // // 示例用法，你可以替换下面的数组为任意你想要的数组
// // const nums = [1, 2, 3, 4, 5];
// // printSymmetric(nums);

// // setTimeout(() => {
// //   console.log("1");
// // }, 1);

// // const p = new Promise((resolve, reject) => {
// //   console.log("2");
// //   Promise.resolve("x").then(console.log);
// //   resolve(3);
// //   Promise.resolve(4).then(console.log);
// //   console.log("5");
// // }).then(console.log);

// // console.log("6");
// // const arrs = [1, 2, 3];

// // function palie(target) {
// //   let path = [];
// //   let current = [];
// //   function DFS() {
// //     if (path.length === 2) {
// //       let n = path.reduce((a, b) => a + b, 0);
// //       if (n === target) {
// //         current.push([...path]);
// //       }
// //       return;
// //     }
// //     for (let i = 0; i <= target; i++) {
// //       path.push(i);
// //       DFS();
// //       path.pop();
// //     }
// //   }
// //   DFS();
// //   return current;
// // }
// // // let ss = palie(3);

// // var maxScore = function (cardPoints, k) {
// //   const arrs = palie(k);
// //   let max = 0;
// //   for (let i = 0; i < arrs.length; i++) {
// //     let leftMax = arrs[i][0] === 0 ? [] : cardPoints.slice(0, arrs[i][0]);
// //     let rightMax =
// //       arrs[i][1] === 0 ? [] : cardPoints.slice(-arrs[i][1], cardPoints.length);
// //     let res = [...leftMax, ...rightMax].reduce((a, b) => a + b, 0);
// //     max = Math.max(max, res);
// //   }
// //   console.log(max);
// //   return max;
// // };

// // maxScore([1, 2, 3, 4, 5, 6, 1], 3);

// // add(1)(2)(3);

// // class Add {
// //   constructor(val) {
// //     this.num = val;
// //   }
// //   add(val) {
// //     this.num += val;
// //     return this;
// //   }
// //   valueOf() {
// //     return this.num;
// //   }
// // }

// // function add(initialValue) {
// //   return new Add(initialValue);
// // }

// // console.log(add(1).add(2).valueOf());

// // add(1)(2)(3);

// // function add(val) {
// //   let num = val;
// //   function add2(nextVal) {
// //     num += nextVal;
// //     return add2;
// //   }
// //   add2.valueOf = function () {
// //     return num;
// //   };
// //   return add2;
// // }

// // console.log(add(1)(2)(3).valueOf()); // 6

// // 输出
// /**
//  *   *
//  *  ***
//  * *****
//  */

// // function log(height) {
// //   for (let i = 1; i <= height; i++) {
// //     // 打印空格
// //     let spaces = " ".repeat(height - i);
// //     // 打印星号
// //     let stars = "*".repeat(2 * i - 1);
// //     // 输出当前行
// //     console.log(spaces + stars);
// //   }
// // }

// // log(6);

// // function printNumberPyramid(height) {
// //   for (let i = 1; i <= height; i++) {
// //     // 打印空格
// //     let spaces = " ".repeat(height - i);
// //     // 打印数字左半部分（递增）
// //     let left = "";
// //     for (let j = 1; j <= i; j++) {
// //       left += j;
// //     }
// //     // 打印数字右半部分（递减）
// //     let right = "";
// //     for (let k = i - 1; k >= 1; k--) {
// //       right += k;
// //     }
// //     // 输出当前行
// //     console.log(spaces + left + right);
// //   }
// // }

// // // 调用函数，输出高度为 4 的数字金字塔
// // printNumberPyramid(4);

// // function printPascalPyramid(height) {
// //   for (let i = 0; i < height; i++) {
// //     // 打印空格
// //     let spaces = " ".repeat(height - i - 1);
// //     // 计算当前行的数字
// //     let row = "";
// //     let number = 1;
// //     for (let j = 0; j <= i; j++) {
// //       row += number + " ";
// //       number = (number * (i - j)) / (j + 1);
// //     }
// //     // 输出当前行
// //     console.log(spaces + row.trim());
// //   }
// // }

// // // 调用函数，输出高度为 5 的帕斯卡金字塔
// // printPascalPyramid(5);

// // test
// // function minMovesToMatch(s1, s2) {
// //   if (s1.length !== s2.length) return -1;

// //   // 检查字符频率是否相同
// //   const count1 = {};
// //   const count2 = {};
// //   for (let char of s1) count1[char] = (count1[char] || 0) + 1;
// //   for (let char of s2) count2[char] = (count2[char] || 0) + 1;

// //   for (let char in count1) {
// //     if (count1[char] !== count2[char]) return -1;
// //   }

// //   let moves = 0;
// //   let i = 0;
// //   let j = 0;

// //   // 将 s1 转换为数组，方便操作
// //   const s1Arr = Array.from(s1);

// //   while (i < s1Arr.length && j < s2.length) {
// //     if (s1Arr[i] === s2[j]) {
// //       i++;
// //       j++;
// //     } else {
// //       // 将 s1Arr[i] 移动到末尾
// //       s1Arr.push(s1Arr.splice(i, 1)[0]);
// //       moves++;
// //     }
// //   }

// //   return moves;
// // }

// // // 测试用例
// // const s1 = "acdk";
// // const s2 = "ckad";
// // console.log(minMovesToMatch(s1, s2)); // 输出: 2

// let str = ["1", "2", "c", "d"];

// let s = str.splice(0, 2);
// let result = ["1", "2"];
// console.log(result.concat(...s));
// console.log(isNaN(str[3]));

// function jiemi(str) {
//   let result = [];
//   let p = 0;
//   for (let i = 0; i < str.length; i++) {
//     let cur = str[i];

//     if (!isNaN(cur)) {
//       if (p == 0) {
//         p = +cur;
//       } else {
//         p = p * 10 + +cur;
//         console.log(p);
//       }
//     } else {
//       if (+p > 0) {
//         p = p % result.length;
//         let s = result.splice(0, +p);
//         console.log(s);
//         result = result.concat(s);
//       }
//       p = 0;
//       if (cur == "R") {
//         result = result.reverse();
//       } else {
//         result.push(cur);
//       }
//     }
//   }
//   console.log(result);
// }

// jiemi("abcRD123Acb");
// 创建一个 6x6 的二维数组，每个元素初始化为空数组
// let map = Array.from({ length: 6 }, () => Array.from({ length: 6 }, () => []));

// // 示例数据
// let arr = [
//   [0, 0],
//   [0, 1],
//   [0, 2],
//   [1, 0],
//   [2, 0],
// ];

// // 填充数据
// for (let i = 0; i < arr.length; i++) {
//   let x = arr[i][0];
//   let y = arr[i][1];
//   map[x][y].push(i); // 将索引 i 存入对应的位置
// }

// console.log(map);

// // 创建一个6x6的矩阵
// function createMatrix(rows, cols) {
//   let matrix = [];
//   for (let i = 0; i < rows; i++) {
//     matrix[i] = [];
//     for (let j = 0; j < cols; j++) {
//       matrix[i][j] = null; // 初始化每个元素为0
//     }
//   }
//   return matrix;
// }

// // 创建一个6x6的矩阵
// const rows = 6;
// const cols = 6;
// const matrix = createMatrix(rows, cols);

// for (let i = 0; i < arr.length; i++) {
//   let x = arr[i][0];
//   let y = arr[i][1];
//   matrix[x][y] = i; // 将索引 i 存入对应的位置
// }
// console.log(matrix);

// 四达时代
// 密码压缩强度
// function minStepsToStrongPassword(pwd) {
//   const n = pwd.length;
//   let steps = 0;

//   // 检查长度
//   if (n < 8) {
//     steps += 8 - n;
//   } else if (n > 20) {
//     steps += n - 20;
//   }

//   // 检查字符类型
//   let hasLower = false,
//     hasUpper = false,
//     hasDigit = false,
//     hasSpecial = false;
//   for (let i = 0; i < n; i++) {
//     const char = pwd[i];
//     if (/[a-z]/.test(char)) hasLower = true;
//     if (/[A-Z]/.test(char)) hasUpper = true;
//     if (/[0-9]/.test(char)) hasDigit = true;
//     if (/[^a-zA-Z0-9]/.test(char)) hasSpecial = true;
//   }
//   const missingTypes = !hasLower + !hasUpper + !hasDigit + !hasSpecial;
//   steps += Math.max(0, missingTypes - steps);

//   // 检查连续重复字符
//   let replace = 0;
//   for (let i = 2; i < n; i++) {
//     if (pwd[i] === pwd[i - 1] && pwd[i - 1] === pwd[i - 2]) {
//       replace++;
//       i += 2; // 跳过接下来的两个字符
//     }
//   }
//   steps += Math.max(0, replace - Math.floor(steps / 3));

//   return steps;
// }

// console.log(minStepsToStrongPassword("Abcdefg123"));

// 分割回文串

// console.log("====================================");
// console.log(fgHw("abadeedaba"));
// console.log("====================================");
// function fgHw(str) {
//   let res = Array.from(str).reverse().join("");
//   if (str == res) return 0;
//   const n = str.length;
//   const dp = new Array(n).fill(Infinity);
//   for (let i = 0; i < dp.length; i++) {
//     if (isHw(str, 0, i)) {
//       dp[i] = 0;
//     } else {
//       for (let j = 0; j < i; j++) {
//         if (isHw(str, j + 1, i)) {
//           dp[i] = Math.min(dp[i], dp[j] + 1);
//         }
//       }
//     }
//   }
//   console.log(dp);
//   return dp[n - 1];
// }

// function isHw(str, left, right) {
//   while (left < right) {
//     if (str[left] != str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// 电视台
// function maxTime(str1, str2) {
//   if (isNaN(str1) || isNaN(str2)) return -1;
//   if (str1 == "" || str2.length == "") {
//     return -1;
//   }
//   if (str1.includes(".") || str2.includes(".")) {
//     return -1;
//   }
//   if (str1.length > 15 || str2.length > 15) return -1;

//   let fh = str1.slice(0, 1);
//   if (fh == "-") str1 = str1.slice(1);
//   let fh2 = str2.slice(0, 1);
//   if (fh2 == "-") str2 = str2.slice(1);
//   let res = multiplyBigNumbers(str1, str2);
//   if (fh == "-" && fh2 == "-") {
//     return -res;
//   } else if (fh == "-" || fh2 == "-") {
//     return -res;
//   } else {
//     return res;
//   }
// }
// console.log(maxTime("123", "-456"));

// function multiplyBigNumbers(num1, num2) {
//   if (num1 === "0" || num2 === "0") return "0";
//   const len1 = num1.length;
//   const len2 = num2.length;
//   const result = new Array(len1 + len2).fill(0);
//   // 从右到左逐位相乘
//   for (let i = len1 - 1; i >= 0; i--) {
//     for (let j = len2 - 1; j >= 0; j--) {
//       const product = (num1[i] - "0") * (num2[j] - "0");
//       const sum = product + result[i + j + 1];
//       result[i + j] += Math.floor(sum / 10);
//       result[i + j + 1] = sum % 10;
//     }
//   }
//   let resultStr = result.join("").replace(/^0+/, "");
//   return resultStr.length === 0 ? "0" : resultStr;
// }

// function test(str1, target) {
//   let arr = str1.split(" ");
//   let path = [];
//   let res = [];
//   function dfs(user) {
//     if (path.length == arr.length) {
//       //   res.push(path.slice());
//       if (path.join("") === target) {
//         res.push(path.slice());
//       }
//       return;
//     }
//     for (let i = 0; i < arr.length; i++) {
//       if (user[i]) continue;
//       path.push(arr[i]);
//       user[i] = true;
//       dfs(user);
//       path.pop();
//       user[i] = false;
//     }
//   }
//   dfs([]);
//   if (res.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(test("Ac aa b", "BaaAc"));

// function minMove(k, day) {
//   let day2 = [1];
//   for (let i = 1; i < day.length; i++) {
//     day2[i] = +day[i] - +day[i - 1];
//   }
//   let ans = 1;
//   let left = 0;
//   let sum = 0;
//   for (let i = 0; i < day2.length; i++) {
//     sum += day2[i];
//     if (sum + day2[i + 1] > k) {
//       ans += 2;
//       sum = 0;
//     }
//   }
//   ans = ans + 1; //hui
//   console.log(ans);
// }

// minMove(8, [2, 3, 5, 6, 10]);
// function minMovements(days, k) {
//   let movements = 0;
//   let currentPosition = "foot"; // 'foot'表示山脚，'camp'表示营地
//   let i = 0;
//   const n = days.length;

//   while (i < n) {
//     if (currentPosition === "foot") {
//       // 当前在山脚，可以进行登山
//       movements++; // 登山
//       currentPosition = "camp"; // 移动到营地
//       const ascentDay = days[i]; // 记录登山日

//       // 寻找下山日，必须在ascentDay后的k天内
//       let j = i + 1;
//       while (j < n && days[j] <= ascentDay + k) {
//         j++;
//       }

//       if (j > i + 1) {
//         // 找到下山日
//         movements++; // 下山
//         currentPosition = "foot"; // 回到山脚
//         i = j; // 移动到下山日的下一个位置
//       } else {
//         // 没有找到下山日，无法继续
//         return -1;
//       }
//     } else {
//       // 当前在营地，无法再次登山
//       return -1;
//     }
//   }

//   // 最终必须回到山脚
//   if (currentPosition === "camp") {
//     // 如果最后一次是登山，但没有下山日，无法完成
//     return -1;
//   }

//   return movements;
// }

// // 示例用法
// const days = [2, 3, 5, 6, 10];
// const k = 8;
// console.log(minMovements(days, k)); // 输出最少的移动次数

// let [x, y] = [4, 5];
// [x, y] = [x + 1, y - 1];
// [x, y] = [y, x];
// console.log([x, y]);

// let reg = /(a|b)b(ab)/;
// let str = "ababab";
// console.log("====================================");
// console.log(str.match(reg));
// console.log("====================================");

// function test(str) {
//   if (str.length == 1) return "-1";
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     let res = fz(str.slice(0, i + 1), str[i]);
//     arr.push(res);
//   }
//   console.log(arr);
// }

// function fz(str, i) {
//   console.log(str);
//   for (let k = str.length - 1; k >= 0; k--) {
//     if (str[k] !== i) {
//       return k + 1;
//     }
//   }
//   return -1;
// }
// test("1101");

// function test(str) {
//   let res = new Array(str.length).fill(-1);
//   let lastzero = -1;
//   let lastone = -1;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "0") {
//       res[i] = lastone;
//       lastzero = i;
//     } else if (str[i] == "1") {
//       res[i] = lastzero;
//       lastone = i;
//     }
//   }
//   for (let i = 0; i < res.length; i++) {
//     if (res[i] !== -1) {
//       res[i] += 1;
//     }
//   }
//   console.log(res.join(" "));
// }
// test("1101");

// function test(str) {
//   if (str.length == 1) return "-1";
//   let map = new Map();
//   let res = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "0") {
//       let index = map.get("1") ?? -1;
//       res.push(index);
//       map.set("0", i + 1);
//     } else if (str[i] == "1") {
//       let index = map.get("0") ?? -1;
//       res.push(index);
//       map.set("1", i + 1);
//     }
//   }
//   console.log(res.join(" "));
// }
// test("1100011101");

// let nums = [1, 4, 3, 3, 2];

// function zeng(nums) {
//   let left = 0;
//   let right = 1;
//   let ans = 0;
//   while (right < nums.length) {
//     if (nums[right] <= nums[right - 1]) {
//       ans = Math.max(ans, right - left);
//       left = right;
//     }
//     right++;
//   }
//   ans = Math.max(ans, right - left);
//   return ans;
// }
// function jian(nums) {
//   let left = 0;
//   let right = 1;
//   let ans = 0;
//   while (right < nums.length) {
//     if (nums[right] >= nums[right - 1]) {
//       ans = Math.max(ans, right - left);
//       left = right;
//     }
//     right++;
//   }
//   ans = Math.max(ans, right - left);
//   console.log(ans);
//   return ans;
// }

// jian(nums);
// zeng(nums);

// 01背包问题

// function bg(target, value, weight) {
//   const n = value.length;
//   // dp[i][j] 表示考虑前 i 个物品，背包容量为 j 时的最大价值
//   let dp = new Array(n).fill(0).map(() => new Array(target + 1).fill(0));

//   // 初始化：第一个物品
//   for (let j = 0; j <= target; j++) {
//     dp[0][j] = j >= weight[0] ? value[0] : 0;
//   }

//   // 动态规划
//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j <= target; j++) {
//       if (j >= weight[i]) {
//         dp[i][j] = Math.max(dp[i - 1][j], value[i] + dp[i - 1][j - weight[i]]);
//       } else {
//         dp[i][j] = dp[i - 1][j];
//       }
//     }
//   }

//   console.log(dp);
//   return dp[n - 1][target];
// }

// function bg2(target, value, weight) {
//   let dp = [];
//   for (let i = 0; i <= target; i++) {
//     dp[i] = i >= weight[0] ? value[0] : 0;
//   }
//   for (let i = 1; i < value.length; i++) {
//     let next = [];
//     for (let j = 0; j <= target; j++) {
//       if (j >= weight[i]) {
//         next[j] = Math.max(value[i] + dp[j - weight[i]], dp[j]);
//       } else {
//         next[j] = dp[j];
//       }
//     }
//     dp = next;
//   }
// }

// function bg2(target, value, weight) {
//   const dp = new Array(target + 1).fill(0);
//   for (let i = 1; i < value.length; i++) {
//     for (let j = target; j >= weight[i]; j--) {
//       dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
//     }
//   }
//   console.log(dp);
// }
// bg2(6, [5, 10, 3, 6, 3], [2, 5, 1, 4, 3]);

// function bg3(target, value) {
//   const dp = new Array(value.length)
//     .fill(0)
//     .map(() => new Array(target + 1).fill(-1));
//   dp[0][0] = 0;
//   for (let i = 1; i < value.length; i++) {
//     const num = value[i - 1];
//     for (let j = 0; j <= target; j++) {
//       dp[i][j] = dp[i - 1][j]; // 不选 nums[i-1]
//       if (j >= num && dp[i - 1][j - num] !== -Infinity) {
//         dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - num] + 1);
//       }
//     }
//   }
//   console.log(dp);
//   return dp[value.length - 1][target] !== -1
//     ? dp[value.length - 1][target]
//     : -1;
// }
// console.log("====================================");
// console.log(bg3(6, [1, 2, 3, 4, 5]));
// console.log("====================================");

// function canPartition(nums) {
//   let sum = nums.reduce((a, b) => a + b);
//   if (sum % 2 != 0) {
//     return false;
//   }
//   sum = sum / 2;
//   let n = nums.length;
//   const dp = new Array(nums.length + 1)
//     .fill(0)
//     .map(() => new Array(sum + 1).fill(0));
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 1; j <= sum; j++) {
//       if (j >= nums[i - 1]) {
//         dp[i][j] = Math.max(
//           dp[i - 1][j],
//           dp[i - 1][j - nums[i - 1]] + nums[i - 1]
//         );
//       } else {
//         dp[i][j] = dp[i - 1][j];
//       }
//     }
//   }
//   console.log(dp);
//   return dp[n - 1][sum] === sum;
// }
// canPartition([1, 5, 11, 5]);

// 完全背包
// function wb(target, value, weight) {
//   const dp = new Array(target + 1).fill(0);
//   for (let i = 0; i < value.length; i++) {
//     for (let j = weight[i]; j <= target; j++) {
//       // 注意只是这里变了，01背包这里为倒叙，而完全背包这里为正序，目的在于重复使用
//       dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
//     }
//   }
//   console.log(dp);
// }
// wb(6, [5, 10, 3, 6, 3], [2, 5, 1, 4, 3]);

// 单调栈
// function isValidBrackets(str) {
//   const bracketPairs = {
//     "{": "}",
//     "(": ")",
//     "[": "]",
//   };
//   const closingBrackets = new Set(["}", "]", ")"]);
//   const stack = [];

//   for (const char of str) {
//     if (bracketPairs[char]) {
//       // 是左括号
//       stack.push(char);
//     } else if (closingBrackets.has(char)) {
//       // 是右括号
//       const lastOpen = stack.pop();
//       if (bracketPairs[lastOpen] !== char) {
//         return false;
//       }
//     }
//     // 字母或其他字符直接跳过
//   }
//   return stack.length === 0; // 确保所有括号都闭合
// }
// console.log(isValidBrackets("{[()]}"));
// console.log(isValidBrackets("a{(b)c}[d]e"));

// function hy(str) {
//   let res = [];
//   let num = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i])) {
//       num += str[i];
//     } else {
//       res.push(str[i].repeat(num));
//       num = "";
//     }
//   }
//   console.log(res.join(""));
//   return res;
// }

// function test(str1, str2) {
//   return hy(str1) == hy(str2);
// }
// test("3m2a1g5a2w", "1m2m2a1g3a2a2w");

// console.log(obj.prototype);

// let obj = {
//   a: 3,
//   b: 4,
//   [Symbol.iterator]: function () {
//     return Object.values(obj)[Symbol.iterator]();
//   },
// };

// var [a, b] = obj;

// console.log(a, b);

// 给出一个仅由1～9组成的字符串S，你可以在任意两个字符之间插入运
// 算符十，注意，可以插入零个或者多个十，但不能在两个字符之间插入多
// 个+，例如对于字符1234.1十2+3+4，1+23+4是合法的，但是
// 1+2++3十4是不合法的。现在，对于给定的字符S,对于合法的插入
// 构成的数学等式，有多少不同的等式的结果质数。

// function ZHNumer(str) {
//   let path = [];
//   let res = new Set();
//   function DFS(index) {
//     if (index === str.length) {
//       let sum = path.reduce((a, b) => +a + +b, 0);
//       if (isPrime(sum)) {
//         res.add(sum);
//       }
//       return;
//     }
//     for (let i = index; i < str.length; i++) {
//       let temp = str.slice(index, i + 1);
//       path.push(temp);
//       DFS(i + 1);
//       path.pop();
//     }
//   }
//   DFS(0);
//   console.log(res);
//   return res.size;
// }
// function isPrime(n) {
//   if (n <= 1) return false; // 1 或负数不是质数
//   if (n === 2) return true; // 2 是唯一的偶质数
//   if (n % 2 === 0) return false; // 排除其他偶数

//   // 检查奇数因子，从 3 开始，每次增加 2
//   // 只需要检查到 sqrt(n) 即可，因为如果有因子，那么另一个因子一定小于 sqrt(n)
//   const sqrtN = Math.sqrt(n);
//   for (let i = 3; i <= sqrtN; i += 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log(ZHNumer("123"));

// function remove(arr) {
//   if (arr.length === 0) return false;
//   const minVal = Math.min(...arr);
//   const maxVal = Math.max(...arr);
//   console.log(maxVal - minVal <= 1);
// }

// remove([6, 9]);

// function test(n, l, r) {
//   if (n > r) {
//     return -1;
//   }
//   let min = Math.ceil(l / n);
//   let max = Math.floor(r / n);
//   if (min > max) {
//     return -1;
//   }
//   return [min, max];
// }

// console.log(test(9, 233, 965));

// 冒泡排序
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j <= arr.length - i - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(bubbleSort(arr));
