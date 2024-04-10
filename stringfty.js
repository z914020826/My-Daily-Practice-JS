// 手写JSON.stringfty
function stringfty(target) {
  let type = typeof target;
  // 基本类型直接返回
  if (type !== "object") {
    if (/string|undefined|function/.test(type)) {
      target = '"' + target + '"';
    }
    return String(target);
  } else {
    //
    let json = [],
      arr = target && target.constructor === Array;
    for (let k in target) {
      let v = target[k];
      let type = typeof v;
      if (/string|undefined|function/.test(type)) {
        v = '"' + v + '"';
      } else if (type === "object") {
        v = stringfty(v);
      }
      json.push((arr ? "" : '"' + k + '":') + String(v));
    }
    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
  }
}
const obj = {
  name: "z",
  age: 18,
  info: {
    a: 1,
    b: 2,
  },
};
console.log(stringfty(obj));
console.log(JSON.stringify(obj));
