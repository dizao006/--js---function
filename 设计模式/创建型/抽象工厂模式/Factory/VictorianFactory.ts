import { Chair, CoffeeTable, Sofa } from "../Products/AbstractProduct";
import {
  VictorianChair,
  VictorianSofa,
  VictorianCoffeeTable,
} from "../Products/VictorianProducts";
import { AbstractFactory } from "./AbstractFactory";

export class VictorianFactory extends AbstractFactory {
  createChair(): Chair {
    return new VictorianChair();
  }
  createSofa(): Sofa {
    return new VictorianSofa();
  }
  createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }
}
