/**
 * 适配器模式（Adapter Pattern）是一种设计模式，它允许不兼容的接口一起工作。
 * 在对象设计中，适配器模式通常用于通过将一个类的接口转换成客户期望的另一个接口，
 * 使得原本接口不兼容的类可以一起工作。适配器模式属于结构型模式。
 * 
在适配器模式中，主要有以下三种角色：
目标（Target）接口：当前系统期望使用的接口，它定义了客户希望使用的方法。
被适配者（Adaptee）类：一个或多个现有的类，它们的接口与目标接口不兼容。

*适配器（Adapter）类：一个中介类，它实现了目标接口，并通过私有方式包含一个被适配者的实例，
*适配器类转换目标接口调用为被适配者接口的调用。
* 适配器就是作为一个中间桥梁，将数据转换成对方能够接收的格式

适配器模式有两种实现方式：
对象适配器模式：使用组合的方式，适配器实现目标接口，并持有被适配者的对象实例。
类适配器模式：使用多重继承的方式（在支持多重继承的语言中，如C++），适配器同时继承目标接口和被适配者类，并通过覆盖被适配者的方法来实现目标接口。
 */
import { Adapter } from "./Adapter";
import { ClientInterface } from "./interface";
import { Service } from "./Service";
class Client {
  private adapter: ClientInterface;

  constructor(adapter: ClientInterface) {
    this.adapter = adapter;
  }
  execute(xml: string) {
    //进行数据分析需要调用第三方服务类
    //由于数据格式不匹配无法直接调用服务类的方法
    //需要经过适配器，然后转换为服务类能够接收的方法
    this.adapter.method(xml);
  }
}

const service = new Service();

const adapter = new Adapter(service);

const client = new Client(adapter);

//使用execute进行数据分析
client.execute("<data>hello world</data>");
