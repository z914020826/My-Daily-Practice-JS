function iteratorGenerator(list) {
  // idx记录当前访问的索引
  var index = 0;
  // len记录传入集合的长度
  var length = list.length;
  return {
    next: () => {
      // 如果索引还没有超出集合长度，done为false

      let done = index >= length;
      // 如果done为false，则可以继续取值

      let value = !done ? list[index++] : undefined;
      return {
        done: done,
        value: value,
      };
    },
  };
}
var iterator = iteratorGenerator(["1号选手", "2号选手", "3号选手"]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
