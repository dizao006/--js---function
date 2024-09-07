import { IMediator, IPublisher, ISubscriber } from "./interface";
//订阅者的实现
export class Subscriber implements ISubscriber {
  private id: number;
  private mider: IMediator;

  constructor(id: number, mediator: IMediator) {
    this.id = id;
    this.mider = mediator;
  }

  receive(msg: string) {
    console.log(`subs ${this.id} received: ${msg}`);
  }
  subscribe(topic: string) {
    this.mider.subscribe(topic, this);
  }

  unsubscribe(topic: string) {
    this.mider.unsubscribe(topic, this);
  }
}
