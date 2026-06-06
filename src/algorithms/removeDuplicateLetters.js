// 去除重复字母 - 返回字典序最小的结果
function removeDuplicateLetters(str) {
  const stack = [];
  const seen = new Set();
  const lastOccurrence = {};

  for (let i = 0; i < str.length; i++) {
    lastOccurrence[str[i]] = i;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!seen.has(char)) {
      while (
        stack.length > 0 &&
        char < stack[stack.length - 1] &&
        i < lastOccurrence[stack[stack.length - 1]]
      ) {
        seen.delete(stack.pop());
      }
      seen.add(char);
      stack.push(char);
    }
  }

  return stack.join("");
}

export default removeDuplicateLetters;
