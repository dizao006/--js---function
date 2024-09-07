import { Chair, Sofa, CoffeeTable } from "../Products/AbstractProduct";

export abstract class AbstractFactory {
  abstract createChair(): Chair;
  abstract createSofa(): Sofa;
  abstract createCoffeeTable(): CoffeeTable;
}
