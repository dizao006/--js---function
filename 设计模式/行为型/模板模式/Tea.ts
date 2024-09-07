// export class Tea {
//   constructor() {}
//   //茶泡步骤
//   public pour(): any {
//     console.log("烧水");
//   }
//   public heat(): any {
//     console.log("====================================");
//     console.log("用热水冲泡茶");
//   }
//   public stir(): any {
//     console.log("====================================");
//     console.log(`茶倒入杯子`);
//   }
//   public addCreamer(): any {
//     console.log("====================================");
//     console.log("添加柠檬");
//   }
//   public drink(): any {
//     console.log("====================================");
//     console.log("好好享用你的下午茶");
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
export class Tea extends Beverage {
  constructor() {
    super();
  }
  //咖啡冲泡步骤
  public brew(): any {
    console.log("====================================");
    console.log("用热水冲泡茶");
  }
  public putCup(): any {
    console.log("====================================");
    console.log(`茶倒入茶壶`);
  }
  public addCondiment(): any {
    console.log("====================================");
    console.log("柠檬");
  }
}
