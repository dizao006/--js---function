// export class Coffee {
//   constructor() {}
//   //咖啡冲泡步骤
//   public pour(): any {
//     console.log("烧水");
//   }
//   public heat(): any {
//     console.log("====================================");
//     console.log("用热水冲泡咖啡");
//   }
//   public stir(): any {
//     console.log("====================================");
//     console.log(`咖啡倒入被子`);
//   }
//   public addCreamer(): any {
//     console.log("====================================");
//     console.log("添加奶油和糖");
//   }
//   public drink(): any {
//     console.log("====================================");
//     console.log("好好享用你的咖啡");
//   }
//   public init(): void {
//     this.pour();
//     this.heat();
//     this.stir();
//     this.addCreamer();
//     this.drink();
//   }
// }

//后续写法
import { Beverage } from "./Beverage";
export class Coffee extends Beverage {
  constructor() {
    super();
  }
  //咖啡冲泡步骤
  public brew(): any {
    console.log("====================================");
    console.log("用热水冲泡咖啡");
  }
  public putCup(): any {
    console.log("====================================");
    console.log(`咖啡倒入被子`);
  }
  public addCondiment(): any {
    console.log("====================================");
    console.log("添加奶油和糖");
  }
  public isAddCondiment(): boolean {
    //根据用户输入是否加调料
    return true;
  }
}
