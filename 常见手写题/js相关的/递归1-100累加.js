/**
 *
 * 递归1-100累加
 */
function deepSum(start, end) {
  if (start === end) {
    return start;
  } else {
    return start + deepSum(++start, end);
  }
}
console.log(deepSum(1, 100));
