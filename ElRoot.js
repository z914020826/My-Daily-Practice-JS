let tree = document.querySelector(".a");

// function traverseElRoot(elRoot) {
//   let result = [];
//   const arr = [elRoot.tagName];
//   result.push(arr);
//   function traverse(rootChild, level) {
//     for (let i = 0; i < rootChild.length; i++) {
//       if (!result[level]) {
//         result[level] = [rootChild[i].tagName];
//       } else {
//         result[level].push(rootChild[i].tagName);
//       }
//       if (rootChild[i].children) {
//         traverse(rootChild[i].children, level + 1);
//       }
//     }
//   }

//   traverse(elRoot.children, 1);
//   return result;
// }
function traverseElRoot(elRoot) {
  const result = [];
  function traverse(element, level = 0) {
    if (!result[level]) {
      result[level] = [];
    }
    result[level].push(element.tagName);
    Array.from(element.children).forEach((child) => {
      traverse(child, level + 1);
    });
  }
  traverse(elRoot);
  return result;
}
console.log(traverseElRoot());
