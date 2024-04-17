const myAtoi = function (str) {
  // 解释这个正则表达式
  // \s* 匹配任意空白字符，0 到多次
  // [-\+]? 匹配一个字符，- 或者 +
  // [0-9]* 匹配一个数字，0 到多次
  // .* 匹配任意字符，0 到多次

  const reg = /\s*([-\+]?[0-9]*).*/;
  const groups = str.match(reg);
  console.log(groups);
  const max = Math.pow(2, 31) - 1;
  const min = -max - 1;
  let result = 0;
  if (groups) {
    result = +groups[1];
    if (isNaN(result)) {
      return 0;
    }
  }
  if (result > max) {
    return max;
  } else if (result < min) {
    return min;
  }
  return result;
};
console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("+-12"));
console.log(myAtoi("00000-42a1234"));
console.log(myAtoi("-5-"));
