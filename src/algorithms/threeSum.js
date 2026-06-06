// 三数之和
function threeSum(nums) {
  const res = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    let left = i + 1,
      right = len - 1;
    const curNum = nums[i];

    if (curNum > 0) return res;
    if (curNum === nums[i - 1]) continue;

    while (left < right) {
      const leftNum = nums[left],
        rightNum = nums[right],
        sum = curNum + leftNum + rightNum;

      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        res.push([curNum, leftNum, rightNum]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
}

export default threeSum;
