function red() {
  console.log("red");
}

function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}

function run(fn, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fn();
      resolve();
    }, time);
  });
}
function task() {
  run(red, 2000)
    .then(async () => {
      await run(green, 4000);
    })
    .then(async () => {
      await run(yellow, 3000);
    })
    .then(() => task());
}

task();
