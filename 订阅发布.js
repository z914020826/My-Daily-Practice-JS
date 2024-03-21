class Observer {
  constructor() {
    this.message = {};
  }
  $on(name, callback) {
    if (!this.message[name]) {
      this.message[name] = [];
    }
    this.message[name].push(callback);
  }
  $off(name, callback) {
    if (!this.message[name]) return;
    if (!callback) {
      this.message[name] = undefined;
    }
    this.message[name] = this.message[name].filter((item) => item != callback);
  }
  $emit(name) {
    if (!this.message[name]) return;
    this.message[name].forEach((item) => {
      item(name);
    });
  }
}
const person1 = new Observer();
person1.$on("买红宝石", handlerA);
person1.$emit("买红宝石");
function handlerA(name) {
  console.log(name);
}
