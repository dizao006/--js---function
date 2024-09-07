//具体产品的实现

import { IFactory } from "./IFactory";
import { ILogger } from "../Logger/lLogger";
import { DatabaseLogger } from "../Logger/DatabaseLogger";

export class DatabaseLoggerFactory implements IFactory {
  createLogger(): ILogger {
    return new DatabaseLogger();
  }
}
