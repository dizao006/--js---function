export {};
interface obsers {
  name: string;
  update: (data: any) => void;
}
class Observe {
  observes: obsers[] = [];
  constructor() {}
  addObserve(obser: obsers) {
    this.observes.push(obser);
  }
  remloveObserve(obser: obsers) {
    let index = this.observes.findIndex((e) => e == obser);
    if (index > -1) {
      this.observes.splice(index, 1);
    }
  }
  emit(data) {
    this.observes.forEach((e) => {
      e.update(data);
    });
  }
}

class Obser implements obsers {
  constructor(public name: string) {}
  update(data: any) {
    console.log(data, this.name);
  }
}

const observable = new Observe();

// 创建观察者实例
const observer1 = new Obser("Observer 1");
const observer2 = new Obser("Observer 2");

// 添加观察者到被观察对象
observable.addObserve(observer1);
observable.addObserve(observer2);

// 发布数据
observable.emit("New data is available!");

// 移除一个观察者
observable.remloveObserve(observer1);

// 再次发布数据
observable.emit("Another new data!");
