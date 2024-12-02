// 连续出现的数字区间
// 给定一个升序整数数组[0,1,2,4,5,7,13,15,16]，找出其中连续出现的数字区间如下：
// ["0->2","4->5","7","13","15->16"]

let continuousNumbers = (nums) => {
  let left = 0;
  let right = 0;
  let result = [];
  let path = [];
  while (left < nums.length) {
    if (left > 0 && nums[left] - nums[left - 1] != 1) {
      result.push(`${path[0]}->${path[path.length - 1]}`);
      path = [];
      right = left;
    }
    path.push(nums[left]);
    left++;
  }
  result.push(`${path[0]}->${path[path.length - 1]}`);
  return result;
};

console.log(continuousNumbers([0, 1, 2, 4, 5, 7, 13, 15, 16]));
