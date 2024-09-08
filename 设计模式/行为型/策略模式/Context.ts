//上下文维护了具体的策略引用
// 回头客户端调用的时候只需要调用上下文的方法即可

import { IStrategy } from "./interface";

export class Context {
  private strategy: IStrategy;
  constructor(st: IStrategy) {
    this.strategy = st;
  }
  setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }
  //执行策略方法
  executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}
