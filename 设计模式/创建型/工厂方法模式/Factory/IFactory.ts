//提供所有工厂的类都需要实现的这个接口
import { ILogger } from "../Logger/lLogger";
export interface IFactory {
  createLogger(): ILogger;
}
