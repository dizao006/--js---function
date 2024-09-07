// 具体产品---现代风
import { Chair, Sofa, CoffeeTable } from "./AbstractProduct";

export class ModernChair extends Chair {
  sitOn(): string {
    return "现代风---椅子";
  }
}

export class ModernSofa extends Sofa {
  linOn(): string {
    return "现代风--沙发";
  }
}

export class ModernCoffeeTable extends CoffeeTable {
  putOn(thing: string): string {
    return "现代风-咖啡桌子 " + thing;
  }
}
