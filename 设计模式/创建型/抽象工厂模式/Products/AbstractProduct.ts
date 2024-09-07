// 抽象产品类

/**
 * 椅子
 * 沙发
 * 咖啡桌
 */

export abstract class Chair {
  abstract sitOn(): string;
}

export abstract class Sofa {
  abstract linOn(): string;
}

export abstract class CoffeeTable {
  abstract putOn(thing: string): string;
}
