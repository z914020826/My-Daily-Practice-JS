class Queue {
  #queue;
  #endIndex;
  #startIndex;

  constructor() {
    this.#queue = {};
    this.#endIndex = 0;
    this.#startIndex = 0;
  }

  enqueue(val) {
    this.#queue[this.#endIndex] = val;
    this.#endIndex++;
    return this.#endIndex;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const val = this.#queue[this.#startIndex];
    delete this.#queue[this.#startIndex];
    this.#startIndex++;
    return val;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#endIndex - this.#startIndex;
  }

  clear() {
    this.#queue = {};
    this.#endIndex = 0;
    this.#startIndex = 0;
  }

  peek() {
    if (this.isEmpty()) return;
    return this.#queue[this.#startIndex];
  }
}

export default Queue;
