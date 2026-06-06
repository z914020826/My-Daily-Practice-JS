// 递归版本（支持指定深度）
function flatten(arr, level = 1) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && level > 0) {
      result = result.concat(flatten(arr[i], level - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// reduce 版本
function flattenReduce(arr, level = 1) {
  return arr.reduce(
    (prev, cur) =>
      prev.concat(
        level > 0 && Array.isArray(cur) ? flattenReduce(cur, level - 1) : cur
      ),
    []
  );
}

// 栈版本（完全扁平化）
function flattenDeep(arr) {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}

export { flatten, flattenReduce, flattenDeep };
