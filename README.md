# @yihang/js-kit

A long-lasting JavaScript toolkit — polyfills, utilities, design patterns, framework internals, algorithms, and data structures.

## Install

```bash
npm install @yihang/js-kit
```

## Usage

```js
// import everything
import { debounce, deepClone, quickSort, Queue, curry } from "@yihang/js-kit";

// or from sub-paths
import { debounce, throttle } from "@yihang/js-kit/utils";
import { reactive, effect } from "@yihang/js-kit/framework";
import { twoSum, quickSort } from "@yihang/js-kit/algorithms";
import { MyPromise } from "@yihang/js-kit/polyfills";
```

## Modules

### Polyfills — `@yihang/js-kit/polyfills`

`myCall` `myApply` `myBind` `applyPolyfills` `myNew` `deepClone` `deepFreeze` `jsonStringify` `MyPromise` `promiseAll` `promiseRace` `promiseAllSettled` `promiseAny` `createIterator`

### Utilities — `@yihang/js-kit/utils`

`debounce` `throttle` `flatten` `flattenReduce` `flattenDeep` `mergeArr` `chunkArr` `formatSizeUnits` `parseUrl` `makeTree` `toTree` `asyncPool`

### Design Patterns — `@yihang/js-kit/patterns`

`Singleton` `Storage` `PubSub` `createProxyObj`

### Framework — `@yihang/js-kit/framework`

`reactive` `effect` `h` `mount` `HashRouter` `HistoryRouter`

### Algorithms — `@yihang/js-kit/algorithms`

`twoSum` `threeSum` `myAtoi` `WordDictionary` `removeDuplicateLetters` `removeKdigits` `validParentheses` `quickSort` `insertionSort` `selectionSort` `bubbleSort` `shellSort` `mergeSort` `countingSort`

### Data Structures — `@yihang/js-kit/data-structures`

`Queue`

### DOM — `@yihang/js-kit/dom`

`traverseElRoot`

### JavaScript Basics — `@yihang/js-kit/javascript`

`curry` `inherit`

### Types — `@yihang/js-kit/types`

`NestedArray<T>`

## License

MIT
