/**
 * 记录状态的常量
 * @param {string} PENDING
 * @param {string} FULFILLED
 * @param {string} REJECTED
 */
const PENDING = 'pending'
const FULFILLED = 'fullfilled'
const REJECTED = 'rejected'
/**
 * 
 * @param {Function} runMicroTask  创建一个微队列 
 */
function runMicroTask(callback) {
    //判断node环境
    if (process && process.nextTick) {
        process.nextTick(callback); //放到微队列马上执行
    } else if (MutationObserver) {
        //浏览器的微队列
        //创建一个观察者实例，观察页面元素的变化，当变化时调用callback放入微队列执行
        const p = document.createElement('p')
        const observer = new MutationObserver(callback)
        observer.observe(p, {
            childList: true
        });
        p.innerHTML = '1'
    } else {
        //低版本的浏览器
        setTimeout(callback, 0);
    }

}


class MyPromise {
    /**
     * @param {Function} executor 任务执行器
     * 
     */
    constructor(executor) {
        this._status = PENDING;
        this._value = undefined
        this._handlers = [] //处理函数形成的对象队列

        //promise代码遇到错误会引起状态变为reject
        try {
            executor(this._reslove.bind(this), this._reject.bind(this));
        } catch (error) {
            this._reject(error);
        }
    }
    /**
     * @param {Function} _pushHandlers 针对handlers增加队列的方式
     * @param {Function} executor 要添加进去的函数
     * @param {String} state 什么状态下执行
     * @param {Function}  resolve then返回的promise成功   后续才会处理
     * @param {Function} reject  then返回的promise失败 
     */
    _pushHandlers(executor, state, resolve, reject) {
        this._handlers.push({
            executor,
            state,
            resolve,
            reject
        })
    }

    /**
     * 
     * @param {Function} onFulfilled 
     * @param {Function} onRejected 
     */
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this._pushHandlers(onFulfilled, FULFILLED, resolve, reject) //表示只有成功的时候才会执行
            this._pushHandlers(onFulfilled, REJECTED, resolve, reject) //表示失败的时候才会执行
        })
    }
    /**
     * @param {Function} _changeStatus  改变状态的方法
     * @param {string} newStatus  新的状态
     * @param  {any} value  任何数据
     */
    _changeStatus(newStatus, value) {
        if (this._status !== PENDING) {
            //状态改变后不允许再次更改
            return
        }
        this._status = newStatus;
        this._value = value;
    }
    _reslove(data) {
        //标记当前任务完成，完成后改变状态和数据
        this._changeStatus(FULFILLED, data)
        // console.log(data, "完成")
        // this._status = FULFILLED
        // this._value = data
    }
    _reject(err) {
        //标记当前任务失败，失败后改变状态和数据
        this._changeStatus(REJECTED, err)
        // console.log(err, "失败")
        // this._status = REJECTED
        // this._value = err
    }
}

let s = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('ye')

    }, 1000)
})
s.then((e) => {
    console.log(e)
})
s.then(function () {}, function () {})
console.log(s)

//测试微队列函数
// runMicroTask(() => {
//     console.log('2')
// })
// console.log('1');