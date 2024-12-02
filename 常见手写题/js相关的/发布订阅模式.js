//观察者模式
class EventListener {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  off(eventName, callback) {
    let task = this.events[eventName];
    if (task) {
      this.events[eventName] = this.events[eventName].filter(
        (item) => item !== callback
      );
    }
    if (this.events[eventName].length === 0) {
      delete this.events[eventName];
    }
  }
  emit(name, ...arg) {
    if (!this.events[name]) return;
    this.events[name].forEach((e) => {
      e(...arg);
    });
  }
}

// 创建一个事件监听器实例
const eventListener = new EventListener();

// 定义一些回调函数
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
}

// 注册事件
eventListener.on("greet", sayHello);
eventListener.on("depart", sayGoodbye);

// 触发事件
eventListener.emit("greet", "Alice"); // 输出: Hello, Alice!
eventListener.emit("depart", "Bob"); // 输出: Goodbye, Bob!

// 移除sayHello回调
eventListener.off("greet", sayHello);

// 再次触发事件，sayHello不会执行
eventListener.emit("greet", "Alice"); // 不会输出任何内容
eventListener.emit("depart", "Bob"); // 输出: Goodbye, Bob!

//发布订阅模式
class Subject {
  constructor() {
    this.observers = [];
  }

  // 添加观察者
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 移除观察者
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // 通知所有观察者
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received data:`, data);
  }
}

// 示例使用
const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify({ message: "Hello, Observers!" });
