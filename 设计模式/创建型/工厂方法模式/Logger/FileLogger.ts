import { ILogger } from "./lLogger";
export class FileLogger implements ILogger {
  log(message: string): void {
    console.log("====================================");
    console.log(`log FileLogger: ${message}`);
  }
}
