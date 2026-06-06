// 有效的括号
function isValid(str) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of str) {
    if (map[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (map[top] !== char) return false;
    }
  }

  return stack.length === 0;
}

export default isValid;
