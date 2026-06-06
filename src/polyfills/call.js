function myCall(fn, context, ...args) {
  if (typeof fn !== "function") {
    throw new TypeError("被调用的对象必须是函数");
  }
  context = context || globalThis;
  const key = Symbol("fn");
  context[key] = fn;
  const result = context[key](...args);
  delete context[key];
  return result;
}

function myApply(fn, context, argsArr) {
  if (typeof fn !== "function") {
    throw new TypeError("被调用的对象必须是函数");
  }
  if (argsArr && !Array.isArray(argsArr)) {
    throw new TypeError("第二个参数必须是数组");
  }
  context = context || globalThis;
  const key = Symbol("fn");
  context[key] = fn;
  const result = context[key](...argsArr);
  delete context[key];
  return result;
}

function myBind(fn, context, ...args) {
  if (typeof fn !== "function") {
    throw new TypeError("被绑定的对象必须是函数");
  }
  context = context || globalThis;
  return function bound(...innerArgs) {
    if (this instanceof bound) {
      return new fn(...args, ...innerArgs);
    }
    return fn.apply(context, args.concat(innerArgs));
  };
}

// opt-in: 挂载到 Function.prototype
function applyPolyfills() {
  Function.prototype.myCall = function (context, ...args) {
    return myCall(this, context, ...args);
  };
  Function.prototype.myApply = function (context, argsArr) {
    return myApply(this, context, argsArr);
  };
  Function.prototype.myBind = function (context, ...args) {
    return myBind(this, context, ...args);
  };
}

export { myCall, myApply, myBind, applyPolyfills };
