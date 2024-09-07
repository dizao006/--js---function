import { INotifier } from "./../Interface";
import { BaseDecorator } from "./BaseDecorator";

export class QQDecorator extends BaseDecorator {
  private QQID: string;
  constructor(notifier: INotifier, QQID: string) {
    super(notifier);
    this.QQID = QQID;
  }

  //重写父类方法
  send(message: string): void {
    super.send(message);
    console.log("QQ message sent to " + this.QQID + message);
  }
}
