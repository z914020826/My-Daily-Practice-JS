class Observer {
  constructor() {
    this.events = {};
  }

  addEvent(name, callback) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(callback);
  }

  removeEvent(name, callback) {
    if (this.events[name]) {
      this.events[name] = this.events[name].filter((fn) => fn !== callback);
    }
  }

  trigger(name, ...args) {
    if (this.events[name]) {
      this.events[name].forEach((fn) => fn(...args));
    }
  }
}
const proxyObj = (obj, option = {}) => {
  // 创建观察者对象
  const observer = new Observer();
  const handler = {
    get(target, key) {
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      observer.trigger("change");
    },
  };
  // 创建代理对象
  const proxy = new Proxy(obj, handler);
  // 添加观察者对象的方法并且绑定this
  proxy.addEvent = observer.addEvent.bind(observer);
  // 添加option中的方法
  for (const key in option) {
    if (!proxy[key]) {
      proxy[key] = option[key];
    }
  }
  return proxy;
};

const obj = { x: 1 };
const methods = {
  add: () => {
    console.log("Add");
  },
  delete: () => {
    console.log("delete!");
  },
};
const instance = proxyObj(obj, methods);
instance.addEvent("change", () => {
  console.log("change1");
});
instance.addEvent("change", () => {
  console.log("change2");
});
instance.x = 3;
instance.add();
instance.delete();
