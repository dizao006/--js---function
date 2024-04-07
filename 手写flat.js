let arr = [1, [2, 3, [4, 5, [12, 3, "zs"], 7, [8, 9, [10, 11, [1, 2, [3, 4]]]]]]];

Array.prototype.Myflat = function (num = '1') {
    let type = this instanceof Array ? true : false //判断是否为数组
    let result = []
    if (!type) {
        return
    }
    this.forEach((e) => {
        let ty = e instanceof Array ? true : false //针对每一项判断是否为数组
        if (ty) {
            //如果是数组，则降低一维，让num--
            num--;
            if (num < 0) {
                //当达到要降低维的时候，将数据加入
                let newArr = result.push(e)
                return newArr //返回新的数据
            }
            //将降维后的数组加入到最终返回的数组中
            result.push(...e.Myflat(num))
        } else {
            //否则就代表已经是一维了
            result.push(e)
        }
    })
    return result
}
console.log(arr.Myflat());