/**
 * 结构：提供一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类。抽象工厂中包含多个工厂方法，每个工厂方法负责创建一个产品族中的不同产品。
 * 目的：创建一组相关或相互依赖的对象，而不是单一类型的产品。
 * 扩展性：在产品族内添加新产品时较为容易，但若要添加新产品族则比较困难，因为需要修改抽象工厂的接口及其所有子类。
 * 使用场景：适用于产品族较为固定，但需要创建多个产品族并确保它们之间的一致性的场景。
 */

/**
 * 在抽象工厂模式中存在 产品族的概念（一个系列对应一组产品），之后在一个工厂生产的时候，是生产这一组产品而非单个的产品
 *
 */

import { AbstractFactory } from "./Factory/AbstractFactory";
import { ModernFactory } from "./Factory/ModernFactory";
import { VictorianFactory } from "./Factory/VictorianFactory";

interface FurnitureSet {
  [key: string]: any;
  chair: object;
  sofa: object;
  coffeeTable: object;
  log: string;
}

class Store {
  private factory: AbstractFactory;

  constructor(fac: AbstractFactory) {
    this.factory = fac;
  }
  public orderFurniture(): object {
    //生产对应风格的套装
    const chair = this.factory.createChair();
    const sofa = this.factory.createSofa();
    const coffeeTable = this.factory.createCoffeeTable();
    return {
      chair,
      sofa,
      coffeeTable,
      log: `${chair.sitOn()} ${sofa.linOn()} ${coffeeTable.putOn("Coffie")}`,
    };
  }
}

const VFactory = new VictorianFactory();
const store = new Store(VFactory);
const product = store.orderFurniture();
for (const key in product) {
  console.log("====================================");
  console.log((product as FurnitureSet)[key]);
  console.log("====================================");
}
