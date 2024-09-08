//用户类

export class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get name(): string {
    return this._name;
  }
}
