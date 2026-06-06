function createIterator(list) {
  let index = 0;
  const length = list.length;
  return {
    next: () => {
      const done = index >= length;
      const value = !done ? list[index++] : undefined;
      return { done, value };
    },
  };
}

export default createIterator;
