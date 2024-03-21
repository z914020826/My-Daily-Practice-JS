// curry
function curry(fn, ...args) {
  // 函数的参数个数可以直接通过函数的.length属性来访问

  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    // 传入的参数小于原始函数fn的参数个数时，则继续对当前函数进行柯里化，
    // 返回一个接收所有参数（当前参数和剩余参数）的函数
    return (..._args) => curry(fn, ...args, ..._args);
  }
}
function add1(x, y, z) {
  return x + y + z;
}
const add = curry(add1);
console.log(add(1)(2)(3));
