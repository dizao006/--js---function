import { ILogger } from "./lLogger";
export class DatabaseLogger implements ILogger {
  log(message: string): void {
    console.log("====================================");
    console.log(`log DatabaseLogger: ${message}`);
  }
}
