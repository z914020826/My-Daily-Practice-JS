import PubSub from "./pubsub.js";

function createProxyObj(obj, option = {}) {
  const observer = new PubSub();
  const handler = {
    get(target, key) {
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      observer.$emit("change", key, value);
      return true;
    },
  };

  const proxy = new Proxy(obj, handler);
  proxy.$on = observer.$on.bind(observer);
  proxy.$off = observer.$off.bind(observer);
  proxy.$emit = observer.$emit.bind(observer);

  for (const key in option) {
    if (!proxy[key]) {
      proxy[key] = option[key];
    }
  }

  return proxy;
}

export { createProxyObj };
