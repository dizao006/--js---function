/**
 *  策略模式：定义了一系列的算法，并且会将每一个算法封装起来，让他们就可以相互替换
 *  上下文：上下文维护了具体的策略引用，也就是说在上下文中选择具体的执行策略
 *  策略接口：定义了所有策略需要实现的方法接口，相当于是给所有的策略一个约束
 *  当上下文需要允许算法的时候，会根据已经选择的策略执行接口所约束的方法
 *  客户端代码：创建一个具体的策略实例传递给上下文，让上下文锁定具体的策略
 *
 * 避免客户端和具体的策略之间直接耦合,使用中间层的模式可以将两个部分隔离开，
 *  这个模式就是在客户端和具体策略之间插入一个中间的类——上下文，
 *  当客户端需要使用策略的时候，将具体的策略传递给上下文，
 *  上下文再使用具体的策略替我们完成了算法的执行。
 * 实现解耦
 *
 */

import { Context } from "./Context";
import {
  AddStrategy,
  RemoveStrategy,
  MultiplyStrategy,
  DivideStrategy,
} from "./Strategy";

const Add = new AddStrategy();

const context = new Context(Add); //创建默认的策略
const action = getStrategy();

function getStrategy() {
  //模拟用户输入
  return "subtract";
}
switch (action) {
  case "add":
    context.setStrategy(new AddStrategy());
    break;

  case "subtract":
    context.setStrategy(new RemoveStrategy());
    break;

  case "multiply":
    context.setStrategy(new MultiplyStrategy());
    break;

  case "divide":
    context.setStrategy(new DivideStrategy());
    break;
  default:
    break;
}
const a = 6;
const b = 7;

console.log(context.executeStrategy(a, b));
