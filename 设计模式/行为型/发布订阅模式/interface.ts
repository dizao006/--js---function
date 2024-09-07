//发布者接口
export interface IPublisher {
  //不需要维护订阅者列表，因为订阅者在订阅的时候会直接访问发布者，并主动注册自己
  //发布者只管发布消息
  publish: (topic: string, message: string) => void;
}

//订阅者接口
//现在由订阅者自己来决定订阅哪个主题，以及是否需要接收到该主题的消息。
//也就是说，订阅者是主动的，他们知道要订阅什么。
//为了实现这一点，需要让subscribe和unsubscribe方法更通用。
export interface ISubscriber {
  receive(msg: string): unknown;
  subscribe: (topic: string) => void;
  unsubscribe: (topic: string) => void;
}

//中间人的接口
export interface IMediator {
  //   //维护主题和订阅者的列表
  //   topics: Map<string, ISubscriber[]>;
  //订阅消息
  subscribe: (topic: string, subscriber: ISubscriber) => void;
  //取消订阅
  unsubscribe: (topic: string, subscriber: ISubscriber) => void;
  //发布消息
  publish(topic: string, message: string): void;
}
