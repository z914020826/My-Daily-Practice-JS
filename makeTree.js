// 将多个文件路径生成树形结构
function makeTree(paths) {
  const tree = {};
  paths.forEach((path) => {
    const pathArr = path.split("/");
    let current = tree;
    pathArr.forEach((dir) => {
      // 如果当前目录不存在，则创建
      if (!current[dir]) {
        current[dir] = {};
      }
      // 进入下一级
      current = current[dir];
    });
  });
  return tree;
}
console.log(makeTree(["a/b/c", "a/b/d", "a/b/e", "a/f/g"]));
