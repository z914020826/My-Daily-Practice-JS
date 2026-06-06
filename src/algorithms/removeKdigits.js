// 移除 K 位数字 - 使剩余数字最小
function removeKdigits(num, k) {
  const stack = [];

  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  while (stack[0] === "0") {
    stack.shift();
  }

  return stack.length ? stack.join("") : "0";
}

export default removeKdigits;
