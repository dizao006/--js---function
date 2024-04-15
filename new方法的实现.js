// 方法一：
// function _myNew(fn, ...arg) {
//     const obj = Object.create(fn.prototype)
//     const ret = fn.apply(obj, arg)
//     return ret instanceof Object ? ret : obj
// }


// 方法二：
const myNew = (fn, ...args) => {
    //Reflect.construct(fn, args)相当于调用了一次 相当于运行 new fn(...args).
    return Reflect.construct(fn, args)
}


function Perosn(name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        console.log(name, age);
    }
}

let pers = myNew(Perosn, 'dz', 15)
pers.say()

