/**
 * 该模式让真实的对象有一个替代品，当外界访问真实对象的时候，外界其实是访问的是代理对象
 * 使用这种模式，代理对象可以帮助真实对象做一些过滤操作，将符合要求的访问进行转发给真实对象
 */

import { Proxy } from "./Proxy";
import { Service } from "./Service";

const relService = new Service();
const proxyService = new Proxy(relService);
proxyService.operation();
