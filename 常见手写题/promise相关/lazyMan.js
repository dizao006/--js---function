// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class LayM {
  constructor(name) {
    this.name = name;
    this.queue = [];
    this.sayName();
    this.run();
  }
  sayName() {
    this.queue.push(() => console.log(this.name));
    return this;
  }
  sleep(time) {
    this.queue.push(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`Wake up after ${time}`);
          resolve();
        }, time * 1000);
      });
    });
    return this;
  }
  sleepFirst(time) {
    this.queue.push(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`Wake up after ${time}`);
          resolve();
        }, time * 1000);
      });
    });
    return this;
  }
  eat(param) {
    this.queue.push(() => {
      console.log(`Eat ${param}`);
    });
    return this;
  }
  run() {
    setTimeout(async () => {
      for (const key of this.queue) {
        await key();
      }
    }, 0);
  }
}
// const LazyMan = (name) => new LayM(name);
// // LazyMan("Hank").sleepFirst(5).eat("supper");
// // LazyMan("Hank").eat("dinner").eat("supper");
// LazyMan("c2c").sleep(2).eat("s");

function deely(fn, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fn();
      resolve();
    }, time);
  });
}

deely(() => console.log("end"), 1000);
