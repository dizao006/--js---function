//中间人，回头当发布者发布新的消息的时候，会通知中间人
//中间人再通知所有的订阅者

import { IPublisher, ISubscriber } from "./interface";
import { IMediator } from "./interface";
//
export class Intermediary implements IMediator {
  //维护一个类型与订阅者之间的列表
  private topics: Map<string, ISubscriber[]> = new Map();
  //订阅方法
  subscribe(topic: string, subscribe: ISubscriber): void {
    const subtopicList = this.topics.get(topic) || []; //拿到对应主题的订阅者列表
    subtopicList.push(subscribe); //将订阅者添加到对应主题列表中
    this.topics.set(topic, subtopicList); //将列表存回映射中
  }
  unsubscribe(topic: string, publisher: ISubscriber): void {
    const subscribers = this.topics.get(topic) || [];
    const index = subscribers.indexOf(publisher);
    if (index > -1) {
      subscribers.splice(index, 1);
    }
  }
  publish(topic: string, msg: string): void {
    const publisherList = this.topics.get(topic) || [];
    for (const pub of publisherList) {
      //进行通知订阅者
      pub.receive(msg);
    }
  }
}
