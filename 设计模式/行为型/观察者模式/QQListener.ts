//qq通知

import { IObserver } from "./interface";

export class QQSubject implements IObserver {
  public update(message: string): void {
    console.log(`QQ收到了${message}`);
  }
}
