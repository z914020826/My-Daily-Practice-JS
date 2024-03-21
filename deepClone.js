function deepClone(obj, map = new Map()) {
  // 判断数据是否是基本数据类型
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  // 判断数据是否已经被克隆过
  if (map.has(obj)) {
    return map.get(obj);
  }

  let newObj;
  //判断数据数据类型，考虑Date、RegExp、Array、Object
  if (Array.isArray(obj)) {
    newObj = [];
  } else if (obj instanceof Date) {
    newObj = new Date(obj);
  } else if (obj instanceof RegExp) {
    newObj = new RegExp(obj.source, obj.flags);
  } else {
    newObj = {};
  }
  // 将克隆的数据存入map
  map.set(obj, newObj);
  // 遍历数据
  for (let key in obj) {
    // 判断是否是自身属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用，存入新对象
      newObj[key] = deepClone(obj[key], map);
    }
  }
  // 处理Symbol属性
  const symbolKey = Object.getOwnPropertySymbols(obj);
  for (const symbol of symbolKey) {
    newObj[symbol] = deepClone(obj[symbol], map);
  }
  // 返回新对象
  return newObj;
}

const obj = {
  a: 1,
  b: {
    c: 2,
    d: new Date(),
    e: /a/,
  },
};
const sy = Symbol("YiHang");
obj[sy] = 123;
obj.self = obj;
let obj2 = deepClone(obj);
console.log(obj2);
