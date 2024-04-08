function removeKdigits(num, k) {
  const stack = [];
  for (let i = 0; i < num.length; i++) {
    // 当栈不为空，且栈顶元素大于当前元素时，出栈
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    // 入栈
    stack.push(num[i]);
  }
  // 如果 k > 0，从栈顶移除 k 个元素
  while (k > 0) {
    stack.pop();
    k--;
  }
  // 去除前导零
  while (stack[0] === "0") {
    stack.shift();
  }
  return stack.length ? stack.join("") : "0";
}
const num = "1432219";
const k = 3;
console.log(removeKdigits(num, k));
