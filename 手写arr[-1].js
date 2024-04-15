let arr = [1, 2, 3, 4, 5]
const proxyAry = (arr) => {
    const len = arr.length
    return new Proxy(arr, {
        get(target, key) {
            key = +key
            if (key < 0) {
                key += len
            }
            return target[key]
        }
    })
}

const proxyAry2 = (arr) => {
    return new Proxy(arr, {
        get(target, key) {
            if (key < 0) {
                key = (+key) + arr.length
            }
            return target[key]
        },
    })
}
let s = proxyAry2(arr)
console.log(s[-2]);