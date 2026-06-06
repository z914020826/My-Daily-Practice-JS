// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// 插入排序
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1;
    const current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

// 选择排序
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// 希尔排序
function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let j = i;
      while (j >= gap && arr[j - gap] > arr[j]) {
        [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
        j -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

// 归并排序
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

// 计数排序
function countingSort(arr, max = Math.max(...arr)) {
  const bucketArr = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    bucketArr[arr[i]]++;
  }
  let pointer = 0;
  for (let i = 0; i < bucketArr.length; i++) {
    while (bucketArr[i]-- > 0) {
      arr[pointer++] = i;
    }
  }
  return arr;
}

export {
  quickSort,
  insertionSort,
  selectionSort,
  bubbleSort,
  shellSort,
  mergeSort,
  countingSort,
};
