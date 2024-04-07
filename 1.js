// function chan(n, ...s) {
//     let arr = [...s];
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let res = change(arr[i]);
//         result.push(res);
//     }
//     for (let i = 0; i < result.length; i++) {
//         console.log(result[i]);
//     }
// }
// function change(str) {
//     let a1 = str;
//     let a2 = [];
//     for (let i = 0; i < a1.length; i++) {
//         let er = (i + 1).toString(2);
//         let num = 0;
//         for (let s = 0; s < er.length; s++) {
//             if (er[s] == "1") {
//                 num++;
//             }
//         }
//         if (num % 2 != 0) {
//             a2.push(i);
//         }
//     }
//     for (let i = 0; i < a2.length; i++) {
//         let sb = a2[i];
//         a1 = a1.replace(a1[sb], a1[sb].toUpperCase());
//     }
//     return a1;
// }
// chan(3,'vwcvnwaomy','ovoxcfdtf','yynbve')


// function chan(n, ...strings) {
//     // 直接在 map 中处理每个字符串，并打印结果
//     strings.map(change).forEach(res => console.log(res));
// }

// function change(str) {
//     // 使用 Array.from 将字符串转换为数组以便操作
//     let arr = Array.from(str);

//     // 遍历字符串，使用正则表达式计算二进制 "1" 的数量
//     arr.forEach((char, index) => {
//         // 将索引转换为二进制字符串，并计算其中 "1" 的数量
//         if ((index + 1).toString(2).replace(/0/g, '').length % 2 !== 0) {
//             // 如果 "1" 的数量是奇数，则转换为大写
//             arr[index] = char.toUpperCase();
//         }
//     });
//     // 将数组转回字符串
//     return arr.join('');
// }

// // 调用函数
// chan(3, 'vwcvnwaomy', 'ovoxcfdtf', 'yynbve');
