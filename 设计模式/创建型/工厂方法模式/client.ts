//工厂方法模式与简单工厂模式的区别在于
/**
 * 简单工厂模式最后在一个工厂里面集中进行产品的创建
 * 而工厂方法模式则是一个产品存在一个工厂，每个工厂都去实现产品的创建，需要哪个工厂引入哪个工厂，不需要一次引入综合的工厂
 * 这样后续拓展的时候无需改动工厂代码，只需要新增新的工厂即可
 * 隐藏具体的创建逻辑
 */

/**
 * 定义抽象工厂：工厂方法模式定义一个创建对象的接口，让子类决定实例化哪一个类。工厂方法使得一个类的实例化延迟到其子类。
 * 遵循开闭原则：新增产品时，只需要新增一个具体工厂类，不需要修改已有代码，符合开闭原则。
 * 更灵活：相比简单工厂模式，工厂方法模式更加灵活，可以处理更复杂的对象创建逻辑。
 * 结构复杂：因为引入了抽象层，结构相对复杂一些。
 * 适用场景：适用于产品种类较多，且可能频繁添加新产品的场景。
 */

import { FileLoggerFactory } from "./Factory/FileLoggerFactory";
import { DatabaseLoggerFactory } from "./Factory/DatabaseLoggerFactory";

const fileFactory = new FileLoggerFactory();
const logerFile = fileFactory.createLogger();
const DatabaseFactory = new DatabaseLoggerFactory();
const logerDatabase = DatabaseFactory.createLogger();
logerFile.log("sssfile");
logerDatabase.log("database");
