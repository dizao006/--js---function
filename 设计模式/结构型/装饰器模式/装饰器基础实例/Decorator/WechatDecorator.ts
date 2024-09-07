import { BaseDecorator } from "./BaseDecorator";
import { INotifier } from "./../Interface";

export class VXDecorator extends BaseDecorator {
  private VXID: string;
  constructor(notifier: INotifier, VXID: string) {
    super(notifier);
    this.VXID = VXID;
  }

  //重写父类方法
  send(message: string): void {
    //父类发一个
    super.send(message);
    //在发送一条微信信息
    console.log("VX message sent to " + this.VXID + message);
  }
}
