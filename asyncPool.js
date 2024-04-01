/**
 *
 * @param {number} poolLimit 并发数
 * @param {Array} array 任务列表
 * @param {Function} iteratorFn 异步函数
 * @returns {Promise} 返回一个 Promise
 */

async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // 存储所有的异步任务
  const pool = []; // 存储正在执行的异步任务

  for (const item of array) {
    //   每个异步任务都要调用 iteratorFn 函数，返回一个 Promise 对象
    const p = Promise.resolve().then(() => iteratorFn(item));
    ret.push(p);

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当pool数组长度大于或等于poolLimit时，说明当前并发已经达到最大限制，使用Promise.race来获得最先完成的任务
      const e = p.then(() => pool.splice(pool.indexOf(e), 1));
      pool.push(e);
      if (pool.length >= poolLimit) {
        await Promise.race(pool);
      }
    }
  }
  // 所有任务都执行完毕
  return Promise.all(ret);
}

asyncPool(4, [1, 2, 3, 4, 5, 6], (item) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(item);
      resolve();
    }, 4000);
  });
});

// 前端工程化
