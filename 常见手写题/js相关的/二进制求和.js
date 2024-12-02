var addBinary = function (a, b) {
  let maxLen = Math.max(a.length, b.length);
  a.length > b.length
    ? (b = b.padStart(maxLen, "0"))
    : (a = a.padStart(maxLen, "0"));
  let Addone = 0;
  let arr = [];
  for (let i = maxLen - 1; i >= 0; i--) {
    let data = +a[i] + +b[i] + Addone;
    Addone = 0;
    if (data >= 2) Addone = 1;
    arr.unshift(data % 2);
  }
  if (Addone > 0) {
    arr.unshift(Addone % 2);
  }
  return arr.join("");
};

console.log(addBinary("0", "0"));
