// 基础装饰器
import { INotifier } from "./../Interface";
//定义整个装饰器的框架，具体的装饰器是继承这个框架的
//只能发送邮件的
export class BaseDecorator implements INotifier {
  //基础的装饰器类是不能够单独使用的，需要传入具体的装饰器
  //回头在初始化的时候，需要传入一个INotifier类型的实例 //具体的方式
  private wrapper: INotifier;
  constructor(notifier: INotifier) {
    this.wrapper = notifier;
  }
  send(message: string): void {
    //接收具体的渠道进行发送this.wrapper传入的就已经是具体的实例了
    this.wrapper.send(message); //进行最基本的装饰器通知，
    //后续具体的装饰器会在发送完这条消息后再次发送具体装饰器的消息
  }
}
