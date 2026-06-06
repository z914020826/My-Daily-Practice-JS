// ========== Polyfills (手写系列) ==========
export {
  myNew,
  deepClone,
  deepFreeze,
  jsonStringify,
  MyPromise,
  promiseAll,
  promiseRace,
  promiseAllSettled,
  promiseAny,
  createIterator,
} from "./polyfills/index.js";

// ========== Utility Functions (工具函数) ==========
export {
  debounce,
  throttle,
  flatten,
  flattenReduce,
  flattenDeep,
  mergeArr,
  chunkArr,
  formatSizeUnits,
  parseUrl,
  makeTree,
  toTree,
  asyncPool,
} from "./utils/index.js";

// ========== Design Patterns (设计模式) ==========
export { Singleton, Storage, PubSub, createProxyObj } from "./patterns/index.js";

// ========== Framework Internals (框架原理) ==========
export { reactive, effect, h, mount, HashRouter, HistoryRouter } from "./framework/index.js";

// ========== Algorithms (算法) ==========
export {
  twoSum,
  threeSum,
  myAtoi,
  WordDictionary,
  removeDuplicateLetters,
  removeKdigits,
  validParentheses,
  quickSort,
  insertionSort,
  selectionSort,
  bubbleSort,
  shellSort,
  mergeSort,
  countingSort,
} from "./algorithms/index.js";

// ========== Data Structures (数据结构) ==========
export { Queue } from "./data-structures/index.js";

// ========== DOM Utilities ==========
export { traverseElRoot } from "./dom/index.js";

// ========== JavaScript Basics (JS基础) ==========
export { curry, inherit } from "./javascript/index.js";
