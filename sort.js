let arr = [2, 3, 1, 4, 8, 7, 9, 6];
// 快速排序
let quickSort = function (arr) {
  // 如果长度为1或空直接返回
  if (arr.length <= 1) return arr;

  //接着，选择"基准"（pivot），并将其与原数组分离，再定义两个空数组，用来存放一左一右的两个子集。
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];

  //然后，开始遍历数组，小于"基准"的元素放入左边的子集，大于基准的元素放入右边的子集。
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 最后，使用递归不断重复这个过程，就可以得到排序后的数组。
  return quickSort(left).concat(pivot, quickSort(right));
};
//
/*  插入排序
    平均时间复杂度【时间】：O(n2)
    最好情况【时间】：O(n)，发生在数组本身有序的情况下。
    最坏情况【时间】：O(n2) ，发生在数组本身反序的情况下。
    空间复杂度【空间】：O(1) ，仅在原数组空间下进行元素交换。
    排序方式【空间】：内排序
    稳定性【空间】：稳定 
*/
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1;
    let current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      // 如果前面的数字大于当前的值,那么就往后挪以为,给current腾出位置
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
/*  选择排序
    平均时间复杂度【时间】：O(n2)
    最好情况【时间】：O(n2)
    最坏情况【时间】：O(n2)
    空间复杂度【空间】：O(1)，仅在原数组空间下进行元素交换。
    排序方式【空间】：内排序
    稳定性【空间】：不稳定
*/
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
/*  冒泡排序
    平均时间复杂度【时间】：O(n2)
    最好情况【时间】：O(n)，发生在数组本身有序的情况下。
    最坏情况【时间】：O(n2) ，发生在数组本身反序的情况下。
    空间复杂度【空间】：O(1) ，仅在原数组空间下进行元素交换。
    排序方式【空间】：内排序
    稳定性【空间】：稳定
*/
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      //最后一个已经是最大的了，所有不用再参与排序
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]; //元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
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
        let temp = arr[j];
        arr[j] = arr[j - gap];
        arr[j - gap] = temp;
        j -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}
// 计数排序
function countingSort(arr, max = Math.max(...arr)) {
  let bucketArr = new Array(max + 1);
  for (let i = 0; i < arr.length; i++) {
    if (!bucketArr[arr[i]]) {
      bucketArr[arr[i]] = 0;
    }
    bucketArr[arr[i]] += 1;
  }
  console.log(bucketArr);
  let pointer = 0;
  for (let i = 0; i < bucketArr.length; i++) {
    while (bucketArr[i]-- > 0) {
      arr[pointer++] = i;
    }
  }
  return arr;
}
// 归并排序
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}
// 基数排序
function radixSort(arr) {}
console.log(mergeSort(arr));
