const bucket = new WeakMap();
let activeEffect = null;

/**
 * 判断是否是对象
 * @param {} value
 * @returns Bolean
 */

function isObject(value) {
  return typeof value == "object";
}

/**
 * 注册作用函数
 * @param [function] fn
 */
function effect(fn) {
  if (typeof fn != "function") return;
  activeEffect = fn;
  fn();
  activeEffect = null;
}
// 收集依赖
function track(target, key) {
  if (!activeEffect) return;
  let depMap = bucket.get(target);
  if (!depMap) {
    depMap = new Map();
    depMap.set(target, depMap);
  }
  let depSet = depMap.get(key);
  if (!depSet) {
    depSet = new Set();
    bucket.set(key, depSet);
  }
  depSet.add(activeEffect);
}
// 触发依赖
function trigger(target, key) {
  let depMap = bucket.get(target);
  if (!depMap) return;
  let depSet = depMap.get(key);
  if (depSet) {
    depSet.forEach((fn) => fn());
  }
}
// 封装reactive代理对象
function reactive(data) {
  if (!isObject(data)) return;

  return new Proxy(data, {
    get(target, key) {
      track(target, key);
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      trigger(target, key);
      return true;
    },
  });
}
