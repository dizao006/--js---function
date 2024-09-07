import { QQDecorator } from "./Decorator/QQDecorator";
import { SMSDecorator } from "./Decorator/SMSDecorator";
import { VXDecorator } from "./Decorator/VXDecorator";
import { Notifier } from "./Notifier";

@SMSDecorator("12331125")
@QQDecorator("2221651157")
@VXDecorator("dizao")
class ClientNotifier extends Notifier {
  constructor(emil: string[]) {
    super(emil);
  }
}

const ClientDecorator = new ClientNotifier(["333@qq.com", "222@gmail.com"]);
ClientDecorator.send("hello");
