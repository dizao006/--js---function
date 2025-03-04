interface queueItem {
  task: () => Promise<any>;
  resolve;
  reject;
}
class SuparkTask {
  queue: queueItem[] = [];
  maxRun: number;
  runComplete: number = 0;
  constructor(maxRun) {
    this.maxRun = maxRun;
  }
  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        task,
        resolve,
        reject,
      });
      this.run();
    });
  }
  run() {
    while (this.queue.length > 0 && this.runComplete < this.maxRun) {
      const { task, resolve, reject } = this.queue.shift();
      this.runComplete++;
      task()
        .then(resolve, reject)
        .finally(() => {
          this.runComplete--;
          this.run();
        });
    }
  }
}

const scheduler2 = new SuparkTask(3);

// 添加异步任务
// time: 任务执行的时间
// val: 参数
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
const addTask2 = (time, val) => {
  scheduler2.add(() => {
    return sleep(time).then(() => console.log(val));
  });
};

addTask2(1000, "1");
addTask2(500, "2");
addTask2(300, "3");
addTask2(400, "4");
