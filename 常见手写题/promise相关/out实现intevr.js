// function customSetInterval(callback, delay) {
//   function interval() {
//     callback();
//     setTimeout(interval, delay);
//   }
//   setTimeout(interval, delay);
// }

// // 使用示例
// customSetInterval(() => {
//   console.log("This message repeats every second");
// }, 1000);

function customSetInterval(callback, time) {
  let stop = false;
  function run() {
    if (stop) return;
    callback();
    setTimeout(() => {
      run();
    }, time);
  }
  run();

  return {
    stop: () => (stop = true),
  };
}

const interval = customSetInterval(() => {
  console.log("This message repeats every second");
}, 1000);

// 停止示例
setTimeout(() => {
  interval.stop();
  console.log("Interval stopped");
}, 5000);

///intever实现out

function myout(fn, dely) {
  let ti = setInterval(() => {
    fn();
    clearTimeout(ti);
  }, dely);
}

myout(() => {
  console.log("ss");
});
