class Events {
  constructor() {
    this._events = {};
  }

  /** 订阅事件
   * @param {*} Event 订阅的事件
   * @param {*} listener 处理函数
   */

  on(event, listener) {
    if (!this._events[event]) {
      this._events[event] = [];
    }
    this._events[event].push(listener);
  }

  /**
   * 发布事件
   * @param {*} event 什么类型
   * @param {*} data 传递给回调函数的数据
   */
  emit(event, data) {
    if (this._events[event]) {
      // 首先有这个类型
      // 通知这个类型下面的所有的订阅者（listener）执行一遍
      this._events[event].forEach((listener) => {
        listener(data);
      });
    }
  }
  /**
   * 取消订阅
   * @param {*} event 对应的事件类型
   * @param {*} listener 要取消的回调函数
   */
  off(event, listener) {
    if (this._events[event]) {
      this._events[event] = this.events[event].filter((item) => {
        return item !== listener;
      });
    }
  }
}
