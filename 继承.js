// 寄生组合继承

function Parent(name) {
  this.sayHello = function () {
    console.log("Hello " + name);
  };
}
Parent.prototype.a = "我是父类原型上的属性";

function Child(name) {
  Parent.call(this, name);
  this.name = name;
}
Child.prototype = Object.create(Parent.prototype);
// 修正构造函数指向
Child.prototype.constructor = Child;
let child = new Child("YiHang");
let child2 = new Child("YiHang2");
console.log(child);
