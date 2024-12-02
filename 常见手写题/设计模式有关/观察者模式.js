class Subject {
  //维护一个观察者列表
  constructor() {
    this.observers = [];
  }

  // 添加观察者
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 移除观察者
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  // 通知观察者
  notify(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

//定义观察者
class Observer {
  update(data) {
    console.log(`Received data: ${data}`);
  }
}

// 测试代码
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("Hello world!"); // Output: Received data: Hello world!

subject.removeObserver(observer1);

subject.notify("Goodbye world!"); // Output: Received data: Goodbye world!
