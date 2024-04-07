function qu(arr) {
    let arr2 = arr.flat(9)
    let result = []
    arr2.forEach(e => {
        if (!isNaN(+e)) {
            result.push(+e)
        }
    });
    result = Array.from(new Set(result)).sort((a, b) => {
        return a - b
    })
    return result.join("").toString()
}

let ar = ['1', 2, ['a', {},
    [null, 3]
], '3', '0', 0]
console.log(qu(ar));

//二面
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let ashi = 0
    let bshi = 0
    for (let i = 0; i < a.length; i++) {
        ashi = ashi + parseInt(a[i]) * Math.pow(2, i)
    }
    for (let i = 0; i < b.length; i++) {
        bshi = bshi + parseInt(b[i]) * Math.pow(2, i)
    }
    let result = ashi + bshi
    return result.toString(2)


};
console.log(addBinary('11', '1'));