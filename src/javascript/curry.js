function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return (..._args) => curry(fn, ...args, ..._args);
}

export default curry;
