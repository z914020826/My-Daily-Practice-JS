Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("被调用的对象必须是函数");
  }
  context = context || globalThis;
  const fn = Symbol("fn");
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
};

Function.prototype.myApply = function (context, argsArr) {
  if (typeof this !== "function") {
    throw new TypeError("被调用的对象必须是函数");
  }
  if (argsArr && !Array.isArray(argsArr)) {
    throw new TypeError("第二个参数必须是数组");
  }
  context = context || globalThis;
  const fn = Symbol("fn");
  context[fn] = this;
  const result = context[fn](...argsArr);
  delete context[fn];
  return result;
};

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myBind - 被调用的对象必须是函数");
  }
  context = context || globalThis;
  const _this = this;
  return function fn(...innerArgs) {
    if (this instanceof fn) {
      return new _this(...args, ...innerArgs);
    }
    return _this.apply(context, args.concat(innerArgs));
  };
};
