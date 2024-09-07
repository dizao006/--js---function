// 工厂
import { ProductA } from "./productA";
import { IProduct } from "./Interface";
import { ProductB } from "./productB";

export class SimpleFactory {
  static createProduct(type: string): IProduct {
    switch (type) {
      case "A":
        return new ProductA();
      case "B":
        return new ProductB();
      default:
        throw new Error("not implemented");
    }
  }
}
