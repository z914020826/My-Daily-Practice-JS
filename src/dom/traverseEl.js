// 遍历 DOM 树，按层级返回标签名
function traverseElRoot(elRoot) {
  const result = [];

  function traverse(element, level = 0) {
    if (!result[level]) {
      result[level] = [];
    }
    result[level].push(element.tagName);
    Array.from(element.children).forEach((child) => {
      traverse(child, level + 1);
    });
  }

  traverse(elRoot);
  return result;
}

export default traverseElRoot;
