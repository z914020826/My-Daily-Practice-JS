/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [],
    len = nums.length;
  nums.sort((a, b) => a - b);
  // 遍历数组
  for (let i = 0; i < len; i++) {
    //   定义左右指针
    let left = i + 1,
      right = len - 1,
      curNum = nums[i];
    //   如果当前数字大于0，直接返回结果
    if (curNum > 0) return res;
    //   如果当前数字和前一个数字相同，跳过
    if (curNum == nums[i - 1]) continue;

    while (left < right) {
      let leftNum = nums[left],
        rightNum = nums[right],
        sum = curNum + leftNum + rightNum;
      // 如果和小于0，左指针右移
      if (sum < 0) left++;
      //   如果和大于0，右指针左移
      else if (sum > 0) right--;
      //   如果和等于0，将结果加入数组
      else {
        res.push([curNum, leftNum, rightNum]);
        //   跳过相同的数字
        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }
        //   跳过相同的数字
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return res;
};
