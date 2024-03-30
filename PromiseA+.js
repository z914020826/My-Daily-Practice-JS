class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    executor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        try {
          onFulfilled(this.value);
        } catch (e) {
          reject(e);
        }
      }
      if (this.state === "rejected") {
        try {
          onRejected(this.reason);
        } catch (e) {
          reject(e);
        }
      }
      if (this.state === "pending") {
        this.onFulfilledCallbacks.push(() => {
          try {
            onFulfilled(this.value);
          } catch (e) {
            reject(e);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            onRejected(this.reason);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
  }
}
setTimeout(() => {
  console.log("setTimeout");
});
let promise = new MyPromise((resolve, reject) => {
  resolve(1);
});
// promise
//   .then(() => {
//     console.log(1);
//     return;
//   })
//   .then(() => {
//     console.log(2);
//   })z
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(4);
//   });
promise
  .then((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log(data);
  });
