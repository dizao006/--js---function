//用户的具体集合
import { IterableCollection, Iterator } from "./Interface";
import { User } from "./User";
import { UserIterator } from "./UserIterator";

export class userSet implements IterableCollection<User> {
  private friends: User[];
  constructor() {
    this.friends = [];
  }
  addFriend(user: User) {
    this.friends.push(user);
  }

  createIterable(): Iterator<User> {
    //返回迭代器
    return new UserIterator(this.friends);
  }
}
