// 具体产品---维多利亚风
import { Chair, Sofa, CoffeeTable } from "./AbstractProduct";

export class VictorianChair extends Chair {
  sitOn(): string {
    return "维多利亚风---椅子";
  }
}

export class VictorianSofa extends Sofa {
  linOn(): string {
    return "维多利亚风--沙发";
  }
}

export class VictorianCoffeeTable extends CoffeeTable {
  putOn(thing: string): string {
    return "维多利亚风-咖啡桌子 " + thing;
  }
}
