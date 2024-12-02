function toreverse(str) {
  let st = "";
  let reg = /[a-z]+./g;
  let arr = str.match(reg);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i][arr[i].length - 1] === ".") {
      arr[i] = arr[i].slice(0, arr[i].length - 1);
    }
    st += arr[i] + ".";
  }
  return st.slice(0, st.length - 1);
}
let url = "www.baidu.toutiao.com";
console.log(toreverse(url));
