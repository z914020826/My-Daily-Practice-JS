// chunk(["a", "b", "c", "d"], 2) => [["a", "b"], ["c", "d"]]
function chunkArr(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default chunkArr;
