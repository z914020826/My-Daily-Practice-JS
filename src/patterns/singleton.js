class Singleton {
  constructor(implClass) {
    this.implClass = implClass;
  }

  getInstance(...args) {
    if (!this.instance) {
      this.instance = new this.implClass(...args);
    }
    return this.instance;
  }
}

// Storage 单例示例
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

export { Singleton, Storage };
