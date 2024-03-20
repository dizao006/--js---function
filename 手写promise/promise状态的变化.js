/**
 * 记录状态的常量
 * @param {string} PENDING
 * @param {string} FULFILLED
 * @param {string} REJECTED
 */
const PENDING = 'pending'
const FULFILLED = 'fullfilled'
const REJECTED = 'rejected'

class MyPromise {
    /**
     * @param {Function} executor 任务执行器
     * 
     */
    constructor(executor) {
        this._status = PENDING;
        this._value = undefined
        //promise代码遇到错误会引起状态变为reject
        try {
            executor(this._reslove.bind(this), this._reject.bind(this));
        } catch (error) {
            this._reject(error);
        }

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
    throw new Error(123)
})
console.log(s)