//求最大公约数
function maxNum(a, b) {
  return b === 0 ? a : maxNum(b, a % b);
}
console.log(maxNum(252, 105));
