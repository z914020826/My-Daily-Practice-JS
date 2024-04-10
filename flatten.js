// 递归方法
function flatten(arr, level = 1) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && level > 0) {
      result = result.concat(flatten(arr[i], level - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
// reduce方法
function flatten1(arr, level = 1) {
  return arr.reduce(
    (prev, cur) =>
      prev.concat(
        level > 0 && Array.isArray(cur) ? flatten1(cur, level - 1) : cur
      ),
    []
  );
}
// 使用栈思想
function flatten2(arr) {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}
function flatten3(arr) {
  const arrStr = JSON.stringify(arr).replace(/\[|\]/g, "");
  return JSON.parse("[" + arrStr + "]");
}
let arr = [
  1,
  2,
  3,
  [
    4,
    5,
    [6, 7, [8, 9, [10, 11, [12, 13, [14, 15, [16, 17, [18, 19, [20]]]]]]]],
  ],
];
console.log(flatten1(arr, 1));
// console.log(flatten1(arr));
// console.log(flatten2(arr));
// console.log(flatten3(arr));
