//定义具体的策略

import { IStrategy } from "./interface";

export class AddStrategy implements IStrategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}
export class RemoveStrategy implements IStrategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

export class MultiplyStrategy implements IStrategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

export class DivideStrategy implements IStrategy {
  execute(a: number, b: number): number {
    return a / b;
  }
}
