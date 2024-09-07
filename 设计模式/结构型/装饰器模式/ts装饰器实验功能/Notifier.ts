import { INotifier } from "./Interface";

//邮箱
export class Notifier implements INotifier {
  private emailAddresses: string[] = [];
  constructor(emailAddresses: string[]) {
    this.emailAddresses = emailAddresses;
  }
  send(message: string): void {
    console.log(`emailAddresses: ${this.emailAddresses.join(", ")}:${message}`);
  }
}
