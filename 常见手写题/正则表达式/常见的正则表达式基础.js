/**
 * 修饰符	描述
i	    执行对大小写不敏感的匹配。
g	    执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
m	    执行多行匹配。

    // 边界符 ^开始  $结尾
    * 0个或者1个
    当使用[]时 ^表示非的意思，也就是[^abc] 除了abc都可以匹配上
    \s 表示空白 空格，换行符
    \S 表示非空白
    \d 数字
    \D 非数字
    \w 匹配字母 数字 下划线
    \W 匹配非字母 数字下划线
    \. 包含除了换行符之外的全部
    * 任意字符
    匹配中文 \p{sc=Han}
*/

// let emli = "12221651157@qq.com";
// // 字面量的形式创建
// let reg1 = /\d+@?qq\./g;
// // 构造函数形式创建
// const reg2 = new RegExp("@qq.com", "g");
// const reg3 = new RegExp("\\d+", "g"); // 注意如果以这种形式创建正则的话，需要\\两个
// const reg4 = /^\d+@qq\.com$/;
// const reg5 = /[^abcq.com]+/g;
// console.log("====================================");
// console.log(emli.match(reg5));
// console.log("====================================");
// console.log(emli.replace(reg2, "@163.com"));
// console.log(emli);

//

// 元组表

// const time = "2022/10-10";
// let reg = /^\d{1,4}([-\/])\d{1,2}\1\d{1,2}$/; //([-\/])  后面使用\1表示继续使用这个元组，保证前后符号一致
// console.log(time.match(reg));
// const hd = `<h1>123123</h1>
// <span>222</span>
// <h2>456456</h2>`;
// const reg11 = /<(h[1-6])>([\s\S]+)<\/\1>/gi; // 在正则中\1表示第一个元组匹配到的内容 \0表示整个内容
// console.log(hd.replace(reg11, "<p>$2</p>"), "asdasd"); //$2 表示第二个元组匹配到的内容
// hd.replace(reg11, (p0, p1, p2) => {
//   // p0 整个匹配到的内容
//   // p1 匹配到的第一个元组
//   // 拿到具体的匹配到的每个元组内容
//   console.log(p0, p1, p2, "xxx");
// });
// 匹配中文
// let zw = "wasdasdawoda啊实打实阿萨的卡拉我参数123123啊  阿松大、、、";
// let reg10 = /\p{sc=Han}/gu;
// console.log(zw.match(reg10));

// 千位分隔符
// let reg11 = /\B(?=(\d{3})+$)/g;

// 不记录分组
//?: 不进行记录，使用元组包裹后忽略

// const ht = `
// http://www.baidu.com
// https://www.baidu.com
// ftp://www.baidu.com
// http://www.google.com
// `;
// let reg12 = /(http|ftp|https)?:(\/\/((?:\w+\.)?\w+\.(?:com|org|cn)))/gi;
// console.dir(reg12.exec(ht));
// console.log(reg12.lastIndex);
// console.dir(reg12.exec(ht));
// console.log(reg12.lastIndex);
// console.dir(reg12.exec(ht));
// console.log(reg12.lastIndex);
 