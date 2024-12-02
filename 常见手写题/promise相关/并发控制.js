// class CountRun {
//   constructor(max) {
//     this.max = max;
//     this.count = 0;
//     this.queue = [];
//   }
//   add(fn) {
//     this.queue.push(fn);
//     this.run();
//   }
//   run() {
//     if (this.queue.length === 0 || this.count >= this.max) return;
//     this.count++;
//     Promise.resolve(this.queue.shift()())
//       .then(() => {
//         this.count--;
//       })
//       .catch((error) => {
//         console.error("Error in task execution:", error);
//         this.count--;
//       })
//       .finally(() => {
//         this.run();
//       });
//   }
// }

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

// // 同时进行的任务最多2个
// const scheduler = new CountRun(2);

// // 添加异步任务
// // time: 任务执行的时间
// // val: 参数
// const addTask = (time, val) => {
//   scheduler.add(() => {
//     return sleep(time).then(() => console.log(val));
//   });
// };

// addTask(1000, "1");
// addTask(500, "2");
// addTask(300, "3");
// addTask(400, "4");

//使用promise all方法进行改造
class CountRun2 {
  constructor(max) {
    this.max = max;
    this.queue = [];
  }
  add(fn) {
    this.queue.push(fn);
    this.run();
  }
  run() {
    if (this.queue.length === 0) return;

    // 取出最多max个任务执行
    const batch = this.queue.splice(0, this.max);
    Promise.all(batch.map((fn) => fn()))
      .then(() => {
        // 当前批次完成后，运行下一个批次
        this.run();
      })
      .catch((error) => {
        console.error("Error in task execution:", error);
        // 出错后继续执行下一批次
        this.run();
      })
      .finally(() => {
        this.run();
      });
  }
}

// 同时进行的任务最多2个
const scheduler2 = new CountRun2(3);

// 添加异步任务
// time: 任务执行的时间
// val: 参数
const addTask2 = (time, val) => {
  scheduler2.add(() => {
    return sleep(time).then(() => console.log(val));
  });
};

addTask2(1000, "1");
addTask2(500, "2");
addTask2(300, "3");
addTask2(400, "4");

function requestConcur(urls, maxNum) {
  return new Promise((resolve, reject) => {
    let index = 0; //下一次请求对应的url下标
    const result = []; //存放结果的数组
    let count = 0; //记录完成的数量
    async function request() {
      let i = index;
      const url = urls[index];
      index++;
      try {
        const resp = await fetch(url);
        result[i] = resp;
      } catch (error) {
        result[i] = err;
      } finally {
        count++;
        if (count === urls.length) {
          resolve(request);
        }
        if (index < urls.length) {
          request(); //如果还有url，就继续请求
        }
      }
    }
    for (let i = 0; i < Math.min(urls.length, maxNum); i++) {
      request();
    }
  });
}
