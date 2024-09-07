/**
 * 再超类中定义一个算法的架构(步骤) 然后再子类不修改结构的情况下重写算法的特定步骤
 *
 * 抽象的父类：封装子类的算法框架，包括实现一些公共方法和子类中所有方法的执行顺序
 * 各个子类：会继承这个抽象类，也就继承了整个的算法结构，子类会针对这个结构里面的部分算法进行重写
 */

//咖啡与茶的故事
import { Coffee } from "./Coofee";
import { Tea } from "./Tea";

const tea = new Tea();
const coffee = new Coffee();
coffee.init();
tea.init();
