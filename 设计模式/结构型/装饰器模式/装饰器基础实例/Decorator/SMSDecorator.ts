import { BaseDecorator } from "./BaseDecorator";
import { INotifier } from "./../Interface";

export class SMSDecorator extends BaseDecorator {
  private SMSID: string;
  constructor(notifier: INotifier, SMSID: string) {
    super(notifier);
    this.SMSID = SMSID;
  }

  //重写父类方法
  send(message: string): void {
    super.send(message);
    //再调用完父类的方法后在完成子类的逻辑
    //再发送完一条SMS短信后
    console.log("SMS message sent to " + this.SMSID + message);
  }
}
