//实现具体的迭代逻辑
// 假设是一个树的逻辑结构，具体如何迭代
// 广度优先还是深度优先遍历

import { User } from "./User";
import { Iterator } from "./Interface";
export class UserIterator implements Iterator<User> {
  private collection: User[] = []; //记录用户列表
  private currentPosition = 0; //记录下标
  constructor(collection: User[]) {
    this.collection = collection;
  }

  getNext(): User | undefined {
    if (!this.hasMore()) return undefined;
    //返回下一个元素
    return this.collection[this.currentPosition++];
  }
  hasMore(): boolean {
    //是否还有下一个元素
    return this.currentPosition < this.collection.length;
  }
}
