/**
 * 一种结构型设计模式
 * 允许将对象放入包含行为的特殊对象里面，从而将原来的对象绑定新的行为
 * 装饰器的本质就是组合，而非继承
 * 而装饰器模式，允许动态地将责任附加到对象上。它们可以在不创造新的子类的情况下，将职责加到对象上。
 * 对象可以根据需要动态选择要加的责权。
 * 类型：结构型
 * 优点：
 * 1. 装饰器模式与其他模式相比，最大的优势就在于动态添加责任，而非通过继承关系来拷贝子类。
 * 2. 动态地给一个对象添加职责，这些责任可以再动态地撤销
 * 3. 装饰模式可以让客戶端忽略被装饰对象的差异，包括被装饰对象是如何被装饰的。
 * 4. 装饰模式易于扩展，因为它不会改变被装饰者的类。
 * 5. 装饰器模式能够实现深度扩展，因为每有一个新的装饰器被添加，对象就可以获得一个额外的职责。
 *
 *
 * 缺点：
 * 1. 多层装饰容易导致麻烦的发生，因为客户程序可能通过一层间接关系联系到最终目标。在这种情况下，要追踪出问题所需的代码行数可能会超过直接联系时所需的代码行数。
 * 2. 装饰模式可能导致在客户端过度地使用装饰。
 *
 */
import { VXDecorator } from "./Decorator/WechatDecorator";
import { SMSDecorator } from "./Decorator/SMSDecorator";
import { Notifier } from "./Notifier";

const baseNotifier = new Notifier(["123@qq.com", "dizao@qq.com"]);

// baseNotifier.send("hello world");

//需求变化，希望发送短信和微信的通知
const SMS = new SMSDecorator(baseNotifier, "15670087192");
const VXandSMS = new VXDecorator(SMS, "w156708");
VXandSMS.send("hello world");
