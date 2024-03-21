Function.prototype.myCall = function (context, ...args) {
  // 先判断调用myCall的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("被调用的对象必须是函数");
  }
  // 如果没有传入上下文对象，那么默认为全局对象window
  context = context || window;

  const fn = Symbol("fn");
  // this是调用myCall的函数，将函数绑定到上下文对象的新属性上
  context[fn] = this;
  // 调用绑定的函数，并传入参数
  const result = context[fn](...arguments);

  // 删除绑定的函数，使对象保持原样
  delete context[fn];
  return result;
};
Function.prototype.myApply = function (context, argsArr) {
  // 先判断调用myApply的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("被调用的对象必须是函数");
  }
  if (argsArr && !Array.isArray(argsArr)) {
    throw new TypeError("第二个参数必须是数组");
  }
  // 如果没有传入上下文对象，那么默认为全局对象window
  context = context || window;
  const fn = Symbol("fn");
  // this是调用myApply的函数，将函数绑定到上下文对象的新属性上
  context[fn] = this;
  // 调用绑定的函数，并传入参数
  const result = context[fn](...argsArr);
  // 删除绑定的函数，使对象保持原样
  delete context[fn];
  return result;
};
Function.prototype.myBind = function (context, ...args) {
  // 判断调用myBind的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myBind - 被调用的对象必须是函数");
  }

  // 如果没有传入上下文对象，则默认为全局对象
  context = context || window;

  // 保存原始函数的引用，this就是要绑定的函数
  const _this = this;

  // 返回一个新的函数作为绑定函数
  return function fn(...innerArgs) {
    // 判断返回出去的函数有没有被new
    if (this instanceof fn) {
      return new _this(...args, ...innerArgs);
    }
    // 使用apply方法将原函数绑定到指定的上下文对象上
    return _this.apply(context, args.concat(innerArgs));
  };
};

let object = { name: "Zhou" };
function fn(name) {
  console.log("this", this);
  console.log(...arguments);
}
let F = fn.myCall(object, "Yu");
{
}
