Array.prototype.myFind = function (fn) {
    let list = this
    for (let i = 0; i < list.length; i++) {
        if (fn(list[i], i, list)) {
            return list[i];
        }
    }
    return undefined
}

let arr = [1, 2, 3, 4, 5, 6, 7, 12, 15, 16]
console.log(arr.myFind((e) => e > 10));