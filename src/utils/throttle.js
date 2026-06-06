function throttle(func, limit) {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      func.apply(this, args);
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

export default throttle;
