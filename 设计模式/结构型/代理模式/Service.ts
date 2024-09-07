import { IService } from "./Interface";

export class Service implements IService {
  operation(): void {
    console.log(" service operation");
  }
}
