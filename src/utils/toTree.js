// 扁平数据结构转树
function toTree(data) {
  const result = [];
  if (!Array.isArray(data)) return result;

  const map = {};
  data.forEach((item) => {
    map[item.id] = item;
  });

  data.forEach((item) => {
    const parent = map[item.parentId];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });

  return result;
}

export default toTree;
