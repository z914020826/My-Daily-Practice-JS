var removeDuplicateLetters = function (str) {
  // 创建一个栈
  const stack = [];
  // 创建一个集合，用于存储栈中的元素
  const seen = new Set();
  // 创建一个对象，用于存储每个字符最后一次出现的位置
  const lastOccurrence = {};
  // 遍历字符串，记录每个字符最后一次出现的位置
  for (let i = 0; i < str.length; i++) {
    lastOccurrence[str[i]] = i;
  }
  console.log(lastOccurrence);
  // 遍历字符串
  for (let i = 0; i < str.length; i++) {
    // 获取当前字符
    const char = str[i];
    // 如果集合中已经存在该字符，则跳过
    if (!seen.has(char)) {
      // 当栈不为空，且栈顶元素大于当前元素，且栈顶元素在后续还会出现时，出栈
      while (
        stack.length > 0 &&
        char < stack[stack.length - 1] &&
        i < lastOccurrence[stack[stack.length - 1]]
      ) {
        // 从集合中移除栈顶元素
        seen.delete(stack.pop());
      }
      // 将当前元素存入Set集合
      seen.add(char);
      // 将当前元素入栈
      stack.push(char);
    }
  }
  return stack.join("");
};
console.log(removeDuplicateLetters("bcabc")); // "abc"
