// 防抖函数
function debounce(fn, dely) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, dely);
  };
}

//节流函数
function throttle(fn, dely) {
  let timer;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, dely);
  };
}

function throttle2(fn, dely) {
  let lastTime = null;
  return function (...args) {
    let now = Date.now();
    if (now - lastTime > dely) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}
