// Promise.all
function all(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          result[index] = value;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
}
// Promise.race
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
}
