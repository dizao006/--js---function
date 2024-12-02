function tenToTwo(val) {
  console.log(val.toString(2));
  let arr = [];
  while (val > 0) {
    let data = val % 2;
    arr.push(data);
    val = Math.floor(val / 2);
  }
  return arr.reverse().join("");
}

console.log(tenToTwo(612367890));
