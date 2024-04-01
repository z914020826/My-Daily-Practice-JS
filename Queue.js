class Queue {
  #queue;
  #endIndex;
  #startIndex;
  constructor() {
    this.#queue = {};
    this.#endIndex = 0;
    this.#startIndex = 0;
  }
  // 队尾入队
  enqueue(val) {
    this.#queue[this.#endIndex] = val;
    this.#endIndex++;
    return this.#endIndex;
  }
  // 队首出队
  dequeue() {
    if (this.isEmpty()) return;
    const val = this.#queue[this.#startIndex];
    delete this.#queue[this.#startIndex];
    this.#startIndex++;
    return val;
  }
  // 判断队列是否为空
  isEmpty() {
    return this.size() === 0;
  }
  // 获取队列长度
  size() {
    return this.#endIndex - this.#startIndex;
  }
  // 清空队列
  clear() {
    this.#queue = {};
    this.#endIndex = 0;
    this.#startIndex = 0;
  }
  // 查看队首元素
  peek() {
    if (this.isEmpty()) return;
    return this.#queue[this.#startIndex];
  }
}

// Path: test.js
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.enqueue(3));
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.peek());
queue.clear();
console.log(queue.isEmpty());
console.log(queue.peek());
