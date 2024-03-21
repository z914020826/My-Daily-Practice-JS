// 手写new方法,让我好理解一点
function myNew(Fn, ...args) {
  let obj = {};
  obj.__proto__ = Fn.prototype;
  let result = Fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}
function Parent(name) {
  this.name = name;
}
let parent = myNew(Parent, "YiHang");
let child = new Parent("YiHang");
console.log(parent);
console.log(child);
