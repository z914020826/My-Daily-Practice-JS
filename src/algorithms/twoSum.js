// 两数之和 - 找出所有和为 target 的不重复数对
function twoSum(nums, target) {
  const map = new Map();
  const result = [];
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      const pair = [complement, nums[i]].sort((a, b) => a - b);
      const key = pair.join(",");
      if (!set.has(key)) {
        set.add(key);
        result.push(pair);
      }
    }
    map.set(nums[i], nums[i]);
  }

  return result;
}

export default twoSum;
