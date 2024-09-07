//具体产品的实现

import { IFactory } from "./IFactory";
import { ILogger } from "../Logger/lLogger";
import { FileLogger } from "../Logger/FileLogger";

export class FileLoggerFactory implements IFactory {
  createLogger(): ILogger {
    return new FileLogger();
  }
}
