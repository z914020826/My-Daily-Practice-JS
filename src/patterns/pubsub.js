class PubSub {
  constructor() {
    this.events = {};
  }

  $on(name, callback) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(callback);
  }

  $off(name, callback) {
    if (!this.events[name]) return;
    if (!callback) {
      this.events[name] = undefined;
      return;
    }
    this.events[name] = this.events[name].filter((item) => item !== callback);
  }

  $emit(name, ...args) {
    if (!this.events[name]) return;
    this.events[name].forEach((callback) => {
      callback(...args);
    });
  }
}

export default PubSub;
