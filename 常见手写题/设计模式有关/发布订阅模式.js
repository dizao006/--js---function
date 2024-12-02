// 创建一个简单的发布订阅对象
const eventEmitter = {
  // 存储事件和对应的回调函数
  events: {},

  // 订阅事件
  subscribe: function (eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  },

  // 发布事件
  emit: function (eventName, ...args) {
    const callbacks = this.events[eventName];
    if (callbacks) {
      callbacks.forEach((callback) => callback(...args));
    }
  },

  // 取消订阅
  unsubscribe: function (eventName, callback) {
    const callbacks = this.events[eventName];
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  },
};

// 使用发布订阅模式
// 订阅一个事件
eventEmitter.subscribe("message", (data) => {
  console.log("Message received:", data);
});

// 发布事件
eventEmitter.emit("message", { text: "Hello, world!" });

// 取消订阅
eventEmitter.unsubscribe("message", (data) => {
  console.log("Message received:", data);
});

// 再次发布事件，之前的订阅者已经取消订阅，所以不会有输出
eventEmitter.emit("message", { text: "Hello again!" });
