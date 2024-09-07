//该接口提供给适配器使用

export interface ClientInterface {
  method(data: string): void;
}
