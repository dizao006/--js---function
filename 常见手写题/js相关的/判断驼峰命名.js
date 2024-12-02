function isTuofeng(str, judge) {
  let reg = /[A-Z]/g;
  let st = str.match(reg).join("");
  return st === judge;
}

console.log(isTuofeng("ByteDance", "BD"));
console.log(isTuofeng("Bytedance", "BD"));
