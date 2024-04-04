// chunk(["a", "b", "c", "d"], 2) => [["a", "b"], ["c", "d"]]
function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
