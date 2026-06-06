function myNew(Fn, ...args) {
  const obj = Object.create(Fn.prototype);
  const result = Fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

export default myNew;
