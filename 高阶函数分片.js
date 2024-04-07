/**
 * 
 * @param {数据} arr 
 * @param {任务执行器} taskFn 
 * @returns 
 */

function perform(arr, taskFn) {
    if (typeof arr == 'number') {
        arr = {
            length: arr
        }
    }
    if (arr.length === 0) {
        return
    }
    let i = 0
    //一次分片执行多少，下一次分片什么时候执行
    function _run() {
        //开启下一次执行
        if (i >= arr.length) {
            return
        }
        /**
         * 该方法绑定浏览器
         * @param idle，回调函数的传入的参数，里面存在timeRemaining方法，调用会得到当前帧的剩余时间
         */
        requestIdleCallback((idle) => {
            //表示下一次浏览器执行的时机
            //浏览器渲染帧一帧为16.6毫秒，但是浏览器每次执行不一定会把这16.6毫秒用完，还会剩下一些时间
            //requestIdleCallback函数就是在剩余时间的时候触发这个回调
            while (idle.timeRemaining() > 0 && i < arr.length) {
                taskFn(arr[i], i)
                i++
            }
            //此次分片完成，开启下一次
            _run()
        })
    }
    _run()
}