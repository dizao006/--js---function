//邮件通知

import { IObserver } from "./interface";

export class EmailSubject implements IObserver {
  public update(message: string): void {
    console.log(`Email收到了${message}`);
  }
}
