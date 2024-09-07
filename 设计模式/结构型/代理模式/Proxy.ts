import { Service } from "./Service";
import { IService } from "./Interface";

export class Proxy implements IService {
  private realService: IService; //存储真实的访问
  constructor(realService: IService) {
    this.realService = realService;
  }

  isTrue(): boolean {
    //经过一系列的复杂运行
    return true;
  }

  operation(): void {
    if (this.isTrue()) {
      //执行真实的服务访问
      this.realService.operation();
    }
  }
}
