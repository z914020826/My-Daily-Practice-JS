// 防抖
let timer;
function debounce(func, delay) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    func();
  }, delay);
}
function createDeBounceFunction(func, delay) {
  let timer;
  let a = 1;
  return function () {
    clearTimeout(timer);
    const _this = this;
    const args = arguments;
    timer = setTimeout(() => {
      func.apply(_this, args);
    }, delay);
  };
}
let testDeBounceFunction = createDeBounceFunction(test, 1000);
document.addEventListener("mousemove", () => {
  testDeBounceFunction();
});
// 节流
function createThrottleFunction(func, limit) {
  let flag = true;
  return function () {
    const _this = this;
    const args = arguments;
    if (flag) {
      flag = false;
      func(_this, args);
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}
let test1ThrottleFunction = createThrottleFunction(test1, 1000);
