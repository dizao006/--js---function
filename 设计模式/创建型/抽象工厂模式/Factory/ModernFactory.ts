import { Chair, CoffeeTable, Sofa } from "../Products/AbstractProduct";
import {
  ModernChair,
  ModernSofa,
  ModernCoffeeTable,
} from "../Products/ModernProducts";
import { AbstractFactory } from "./AbstractFactory";

export class ModernFactory extends AbstractFactory {
  createChair(): Chair {
    return new ModernChair();
  }
  createSofa(): Sofa {
    return new ModernSofa();
  }
  createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }
}
