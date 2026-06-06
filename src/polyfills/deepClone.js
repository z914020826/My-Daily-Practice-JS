function deepClone(obj, map = new Map()) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (map.has(obj)) {
    return map.get(obj);
  }

  let newObj;
  if (Array.isArray(obj)) {
    newObj = [];
  } else if (obj instanceof Date) {
    newObj = new Date(obj);
  } else if (obj instanceof RegExp) {
    newObj = new RegExp(obj.source, obj.flags);
  } else {
    newObj = {};
  }

  map.set(obj, newObj);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key], map);
    }
  }

  const symbolKeys = Object.getOwnPropertySymbols(obj);
  for (const symbol of symbolKeys) {
    newObj[symbol] = deepClone(obj[symbol], map);
  }

  return newObj;
}

export default deepClone;
