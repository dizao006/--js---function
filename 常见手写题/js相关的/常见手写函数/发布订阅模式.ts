class EventEmitter {
  events: Map<string, Function[]> = new Map<string, Function[]>();
  constructor() {}
  subscribe(eventName, callback) {
    if (this.events.has(eventName)) {
      this.events.get(eventName).push(callback);
    } else {
      this.events.set(eventName, [callback]);
    }
  }
  unSubscrible(eventName, callback) {
    let events = this.events.get(eventName);
    let index = events.findIndex((e) => e == callback);
    if (index > -1) {
      events.splice(index, 1);
      this.events.set(eventName, events);
    }
  }
  emit(eventName, ...args) {
    let events = this.events.get(eventName);
    if (events) {
      events.forEach((e) => {
        e(...args);
      });
    }
  }
}

// 创建 EventEmitter 实例
const emitter = new EventEmitter();

// 定义回调函数
const callback1 = (data) => {
  console.log(`Callback 1 received: ${data}`);
};

const callback2 = (data) => {
  console.log(`Callback 2 received: ${data}`);
};

// 订阅事件
emitter.subscribe("message", callback1);
emitter.subscribe("message", callback2);

// 发布事件
emitter.emit("message", "Hello, World!");

// 取消订阅 callback1
emitter.unSubscrible("message", callback1);

// 再次发布事件
emitter.emit("message", "New message!");
