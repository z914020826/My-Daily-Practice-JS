class SingleDog {
  a = 0;
  constructor(name) {
    this.name = name;
    if (!SingleDog.instance) {
      SingleDog.instance = this;
    }
    return SingleDog.instance;
  }
  say() {
    console.log(++this.a);
  }
}

const s1 = new SingleDog("s1");
s1.say();
s1.say();
const s2 = new SingleDog("s2");
s2.say();
s2.say();
console.log(s1 === s2);

/**
 * 实现Storage，使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)。
 */

class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }
  setItem(key, value) {
    return localStorage.setItem(key, value);
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
}
const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();

storage1.setItem("name", "李雷");
// 李雷
storage1.getItem("name");
// 也是李雷
storage2.getItem("name");

// 返回true
console.log(storage1 === storage2);

fn3(fn2(fn1(x)));
