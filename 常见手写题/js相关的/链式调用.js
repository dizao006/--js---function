class match {
  constructor(val = 0) {
    this.val = val;
  }
  add(...arg) {
    this.val = arg.reduce((a, b) => a + b, this.val);
    return this;
  }
  minus(...arg) {
    this.val = arg.reduce((a, b) => a - b, this.val);
    return this;
  }
  times(time) {
    this.val = time * this.val;
    return this;
  }
  getResult() {
    return this.val;
  }
}
const result = new match(0).add(2, 4).minus(3).times(2).getResult();
console.log(result); // 输出: 6
