/**

 * 观察者模式
 * 允许你定义一种订阅机制，之后对象相应的事件发生时，
 * 通知多个观察者，这些个观察者会根据事件进行一些列自身的行为
 */

/**
 * 发布者：内部维护了一个观察者列表，里面记录的所有的观察者，同时可以对这个列表进行增删
 * 以及进行通知观察者
 * 2 当新事件发生时，发布者就会遍历整个观察者列表，然后调用每个观察者对应的方法
 * 观察者接口：定义了观察者对应的方法约束。
 * 具体观察者：实现观察者接口里面定义的方法，内部需要有具体的方法实现
 */

import { EmailSubject } from "./EmailListener";
import { QQSubject } from "./QQListener";
import { Subject } from "./Subject";
const subject = new Subject();
const QQ = new QQSubject();
const Email = new EmailSubject();

subject.addObserver(QQ);
subject.addObserver(Email);
subject.notifyObservers("新货上市，快来抢购");
