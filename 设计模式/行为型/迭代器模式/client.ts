/**
 * 迭代器模式在js中天然支持
 * ES6 中 迭代器模式被更完美的支持， 并增加了迭代器接口 Iterator 以及 for-of 循环
 * Iterator 接口有4个方法：
 * next() 返回当前元素的键和值
 * return(value) 返回一个值，结束迭代
 * throw(error) 抛出一个错误，结束迭代
 * Symbol.iterator() 返回当前对象的迭代器
 *
 * for-of 循环在调用 iterable.Symbol.iterator() 时，会自动使用迭代器的next()方法来遍历集合
 * 直到返回的 done 为true
 *
 */
/**
 * 更现代的方法是使用generator（生成器）函数
 */

import { User } from "./User";
import { userSet } from "./UserSet";

/**
 * 迭代器模式
 * 在不暴露底层数据结构的情况下，遍历集合中所有的元素
 *
 * 集合可以是数组，类数组对象，对象，字符串等， 不同的集合有不同的遍历方法
 * 例如，数组可以通过索引遍历， 类数组可以通过 length 属性和 []取值遍历元素，
 * 对象可以通过 for..in 循环遍历键值，字符串可以通过字符串长度循环遍历字符
 */

const alice = new User("alice");

const bob = new User("bob");

const dizao = new User("dizao");

const userset = new userSet();
userset.addFriend(alice);
userset.addFriend(bob);
userset.addFriend(dizao);

//遍历该集合
const iterator = userset.createIterable();

while (iterator.hasMore()) {
  const user = iterator.getNext();
  console.log(user?.name);
}
