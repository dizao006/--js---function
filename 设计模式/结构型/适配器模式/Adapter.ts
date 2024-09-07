//适配器类
import { ClientInterface } from "./interface";
import { Service } from "./Service";

export class Adapter implements ClientInterface {
  private service: Service;

  constructor(adapter: Service) {
    this.service = adapter;
  }

  //提供数据转换的方法，将数据转换为json
  //然后调用服务类的方法进行分析
  public method(data: string): void {
    console.log("适配器转换为json格式");
    const JSONData = this.convertData(data);
    //接下来调用第三方服务类
    this.service.serviceMethod(JSONData);
  }
  private convertData(data: string): string {
    return `{"data":${data}}`;
  }
}
