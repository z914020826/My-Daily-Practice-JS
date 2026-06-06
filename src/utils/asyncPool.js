async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = [];
  const pool = [];

  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item));
    ret.push(p);

    if (poolLimit <= array.length) {
      const e = p.then(() => pool.splice(pool.indexOf(e), 1));
      pool.push(e);
      if (pool.length >= poolLimit) {
        await Promise.race(pool);
      }
    }
  }

  return Promise.all(ret);
}

export default asyncPool;
