// 将多个文件路径生成树形结构
function makeTree(paths) {
  const tree = {};
  paths.forEach((path) => {
    const pathArr = path.split("/");
    let current = tree;
    pathArr.forEach((dir) => {
      if (!current[dir]) {
        current[dir] = {};
      }
      current = current[dir];
    });
  });
  return tree;
}

export default makeTree;
