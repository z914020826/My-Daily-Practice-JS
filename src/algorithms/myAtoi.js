// 字符串转整数 (atoi)
function myAtoi(str) {
  const reg = /\s*([-+]?[0-9]*).*/;
  const groups = str.match(reg);
  const max = Math.pow(2, 31) - 1;
  const min = -max - 1;

  let result = 0;
  if (groups) {
    result = +groups[1];
    if (isNaN(result)) return 0;
  }

  if (result > max) return max;
  if (result < min) return min;
  return result;
}

export default myAtoi;
