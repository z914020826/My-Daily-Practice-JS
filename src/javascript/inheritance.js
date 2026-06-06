// 寄生组合继承
function inherit(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// 示例
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = function () {
  return "Hello " + this.name;
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

inherit(Child, Parent);

export { inherit, Parent, Child };
