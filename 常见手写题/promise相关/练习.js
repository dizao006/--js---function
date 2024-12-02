function PromiseAll(pms) {
  return new Promise((resolve, reject) => {
    if (pms.length === 0) return resolve([]);
    const result = [];
    let complate = 0;

    pms.forEach((fn) => {
      Promise.resolve(fn())
        .then((res) => {
          result[complate] = res;
          complate++;
          if (complate == pms.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

function PromiseRace(pms) {
  return new Promise((resolve, reject) => {
    for (const pro of pms) {
      Promise.resolve(pro)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    }
  });
}

function PromiseAny(pms) {
  return new Promise((resolve, reject) => {
    const result = [];
    let errCount = 0;
    pms.forEach((fn, index) => {
      Promise.resolve(fn())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          result[index] = err;
          errCount++;
          if (errCount === pms.length) {
            reject(err);
          }
        });
    });
  });
}

function PromiseallSettled(pms) {
  return new Promise((resolve, reject) => {
    if (pms.length === 0) return resolve([]);
    const result = [];
    let complate = 0;
    pms.forEach((fn, index) => {
      Promise.resolve(fn())
        .then((res) => {
          result[index] = { status: "fulfilled", value: res };
          complate++;
        })
        .catch((err) => {
          result[index] = { status: "rejected", reason: err };
          complate++;
        });
    });
    if (complate === pms.length) {
      resolve(result);
    }
  });
}

//并发控制

class countRun {
  constructor(maxNum) {
    this.maxNum = maxNum;
    this.tasks = [];
  }
  add(fn) {
    this.tasks.push(fn);
    this.run();
  }
  run() {
    if (this.tasks.length === 0) return;
    const task = this.tasks.splice(0, this.maxNum);
    task.forEach((fn) => {
      Promise.resolve(fn)
        .then((res) => {
          this.run();
        })
        .catch((err) => {
          console.error(err);
          this.run();
        })
        .finally(() => {
          this.run();
        });
    });
  }
}

function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype);
  const res = fn.apply(obj, args);
  return res instanceof Object ? res : obj;
}
