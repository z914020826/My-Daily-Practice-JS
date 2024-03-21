// 扁平数据结构转树,
function toTree(data) {
  let result = [];
  if (!Array.isArray(data)) {
    return result;
  }
  // 建立映射
  let map = {};
  data.forEach((item) => {
    map[item.id] = item;
  });
  data.forEach((item) => {
    let parent = map[item.parentId];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

let data = [
  { id: 1, parentId: 0, note: "一级菜单-11" },
  { id: 2, parentId: 0, note: "一级菜单-12" },
  { id: 2, parentId: 1, note: "二级菜单-22" },
  { id: 3, parentId: 2, note: "三级菜单-33" },
  { id: 4, parentId: 2, note: "三级菜单-44" },
];
console.log(toTree(data));
//树形菜单
let tree = [
  {
    id: 1,
    parentId: 0,
    note: "一级菜单-11",
    chlidren: [
      {
        id: 2,
        parentId: 1,
        note: "二级菜单-22",
        chlidren: [
          {
            id: 3,
            parentId: 2,
            note: "三级菜单-33",
          },
          {
            id: 4,
            parentId: 2,
            note: "三级菜单-44",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    parentId: 0,
    note: "一级菜单-12",
  },
];
