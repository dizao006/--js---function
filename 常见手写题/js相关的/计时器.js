class Count {
  constructor() {
    this.count = 0;
  }

  add() {
    return ++this.count;
  }

  reset() {
    this.count = 0;
    return this.add();
  }
}
const instance = new Count();
console.log(instance.add()); //1
console.log(instance.add()); //2
console.log(instance.add()); //3
console.log(instance.reset()); //1
console.log(instance.add()); //1
