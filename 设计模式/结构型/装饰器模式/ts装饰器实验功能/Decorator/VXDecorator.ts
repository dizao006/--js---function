export function VXDecorator(VXID: string): ClassDecorator {
  return function (constructor: Function) {
    //原型上的send方法，包装之前要先执行以下send方法，然后拓展逻辑
    const send = constructor.prototype.send; //拿到原本的send方法
    constructor.prototype.send = function (message: string) {
      send.apply(this, arguments); //执行一次send方法后
      //在执行本装饰器的方法
      console.log(`VX Message sent to ${VXID}:${message}`);
    };
  };
}
