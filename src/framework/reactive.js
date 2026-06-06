const bucket = new WeakMap();
let activeEffect = null;

function isObject(value) {
  return typeof value === "object" && value !== null;
}

function effect(fn) {
  if (typeof fn !== "function") return;
  activeEffect = fn;
  fn();
  activeEffect = null;
}

function track(target, key) {
  if (!activeEffect) return;
  let depMap = bucket.get(target);
  if (!depMap) {
    depMap = new Map();
    bucket.set(target, depMap);
  }
  let depSet = depMap.get(key);
  if (!depSet) {
    depSet = new Set();
    depMap.set(key, depSet);
  }
  depSet.add(activeEffect);
}

function trigger(target, key) {
  const depMap = bucket.get(target);
  if (!depMap) return;
  const depSet = depMap.get(key);
  if (depSet) {
    depSet.forEach((fn) => fn());
  }
}

function reactive(data) {
  if (!isObject(data)) return data;

  return new Proxy(data, {
    get(target, key) {
      track(target, key);
      const result = target[key];
      return isObject(result) ? reactive(result) : result;
    },
    set(target, key, value) {
      target[key] = value;
      trigger(target, key);
      return true;
    },
  });
}

export { reactive, effect };
