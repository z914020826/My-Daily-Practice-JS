function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
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

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject);
    });
  });
}

function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    const result = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          result[index] = { status: "fulfilled", value };
          count++;
          if (count === promises.length) resolve(result);
        },
        (reason) => {
          result[index] = { status: "rejected", reason };
          count++;
          if (count === promises.length) resolve(result);
        }
      );
    });
  });
}

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(resolve, (reason) => {
        errors[index] = reason;
        count++;
        if (count === promises.length) {
          reject(new AggregateError(errors, "All promises were rejected"));
        }
      });
    });
  });
}

export { promiseAll, promiseRace, promiseAllSettled, promiseAny };
