function log() {
  let index = 0;
  return function () {
    index++;
    if (index % 2 === 0) {
      return 2;
    } else {
      return 1;
    }
  };
}

let A = log();
console.log(A());
console.log(A());
console.log(A());
console.log(A());
