let nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(partitionOddEven(nums));

function partitionOddEven(nums) {
  if (nums.length == 0) return [];
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    while (left < right && nums[left] % 2 == 1) {
      left++;
    }
    while (left < right && nums[right] % 2 == 0) {
      right--;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return nums;
}
