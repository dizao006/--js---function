//观察者接口 定义观察者必须要实现的方法

export interface IObserver {
  update(message: string): void;
}
