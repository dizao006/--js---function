// 得到具体的产品
// 但是并不需要引入PA PB 只需要引入工厂,调用工厂提供的接口得到对应的产品

/**
 * 结构简单：简单工厂模式通常只包含一个工厂类，该类根据传入的参数来创建并返回不同类的实例。
 * 违反开闭原则：如果需要添加新的产品类，必须修改工厂类，违反了开闭原则（对扩展开放，对修改关闭）。
 * 易于理解和使用：由于其结构简单，通常更容易被理解和实现。
 * 适用场景：适用于产品种类相对较少，且不会频繁添加新产品的场景。
 */

import { SimpleFactory } from "./SimpleFactory";

const PA = SimpleFactory.createProduct("A");
const PB = SimpleFactory.createProduct("B");

// console.log("====================================");
console.log(PA, PB);
// console.log("====================================");
PA.use();
PB.use();
