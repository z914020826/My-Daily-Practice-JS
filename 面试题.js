// 引入fs模块
const fs = require("fs"); // 读取文件
fs.readFile("./input.txt", "utf-8", function (err, data) {
  const lines = data.trim().split("\r\n");
  const nums = lines.map((line) => parseInt(line));
  const totals = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      sum += nums[i];
    } else {
      totals.push(sum);
      sum = 0;
    }
    if (i == nums.length - 1) {
      totals.push(sum);
    }
  }
  totals.sort((a, b) => b - a);
  totals.length = 3;
  console.log(totals);
  return;
});
