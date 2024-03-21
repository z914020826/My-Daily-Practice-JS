// deepFreeze
function deepFreeze(obj) {
  Object.freeze(obj);
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Object.isFrozen(obj[key])) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}
