function isType(date) {
    return Object.prototype.toString.call(date).slice(8, -1)
}
// console.log(isType(/reg/))
let arr = [1, 3, 5]
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(arr.constructor);
console.log(Object.prototype.toString.call(arr));

console.log(isType({}));

