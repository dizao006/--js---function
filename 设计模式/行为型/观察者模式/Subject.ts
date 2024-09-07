//发布者

import { IObserver } from "./interface";

//内部需要维护一个观察者列表，以及对应的方法

export class Subject {
  private observers: IObserver[] = []; //观察者列表

  public addObserver(observer: IObserver) {
    this.observers.push(observer); //增加观察者
  }
  public removeObserver(observer: IObserver) {
    this.observers = this.observers.filter((e: IObserver) => e !== observer);
  }

  //通知所有的观察者，调用自己的update方法
  public notifyObservers(message: string): void {
    this.observers.forEach((e) => {
      e.update(message);
    });
  }
}
