function jsonStringify(target) {
  let type = typeof target;
  if (type !== "object") {
    if (/string|undefined|function/.test(type)) {
      target = '"' + target + '"';
    }
    return String(target);
  }

  let json = [];
  let arr = target && target.constructor === Array;

  for (let k in target) {
    let v = target[k];
    let vType = typeof v;
    if (/string|undefined|function/.test(vType)) {
      v = '"' + v + '"';
    } else if (vType === "object") {
      v = jsonStringify(v);
    }
    json.push((arr ? "" : '"' + k + '":') + String(v));
  }

  return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
}

export default jsonStringify;
