let str = "1000000000012300";

function parse(str) {
  let reg = /\B(?=(\d{3})+$)/g;
  return str.replace(reg, ",");
}
console.log(parse(str));
