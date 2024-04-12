function twoSum(nums, target) {
  const map = new Map();
  const result = [];
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (map.has(num)) {
      const arr = [map.get(num), num];
      const str = arr.join(",");
      if (!set.has(str)) {
        set.add(str);
        result.push(arr);
      }
    }
    map.set(nums[i], num);
  }
  console.log(result);
  return result;
}
const nums = [0, 1, -1, 0, 0, 0];
twoSum(nums, 0);
