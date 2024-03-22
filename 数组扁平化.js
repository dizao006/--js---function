let arr = [1, 2, [2, 3, 4, [2, 1], 2, [2, 3]]]

// flat 方法
// let s = arr.flat(2)
// console.log(s)

//reduce方法
function Myflat(arr) {
    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            pre.push.apply(pre, Myflat(cur))
        } else {
            pre.push(cur)
        }
        return pre
    }, [])
}
console.log(Myflat(arr));

