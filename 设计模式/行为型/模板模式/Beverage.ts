// 定义一个抽象类，用于抽象冲泡饮料的步骤
export abstract class Beverage {
  //1 烧水，无论是茶还是饮料，都会存在固定的步骤烧水，因此固定的步骤可以写到父类中
  //而根据冲泡饮料的不同而导致的不同则由子类具体实现，父类仅提供必要的步骤
  public upWater() {
    console.log("把水烧开");
  }
  abstract brew(): void; //冲泡具体的物品    由于内容不固定，所以交由子类具体实现
  abstract putCup(): void; //到到容器中
  abstract addCondiment(): void; //添加佐料
  public drink() {
    console.log("好好享用你的下午茶");
  }
  public init(): void {
    this.upWater();
    this.brew();
    this.putCup();
    if (this.isAddCondiment()) {
      this.addCondiment();
    }
  }
  isAddCondiment(): boolean {
    return true;
  }
}
