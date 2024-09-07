//发布者

import { IMediator, IPublisher } from "./interface";

export class Publisher implements IPublisher {
  private midel: IMediator;
  constructor(midel: IMediator) {
    this.midel = midel;
  }

  //发布消息的方法
  //通过中间人进行发布
  publish(topic: string, message: string): void {
    console.log(`发布者发布消息: ${message} to ${topic}`);
    //通知中间人，向指定主题发送消息
    this.midel.publish(topic, message);
    console.log("====================================");
  }
}
