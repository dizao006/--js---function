function repeat(fn, number, time) {
  let index = 0;
  let timer;
  new Promise((resolve, reject) => {
    timer = setInterval(async () => {
      if (index < number) {
        await fn();
      } else {
        clearInterval(timer);
        resolve();
      }
      index++;
    }, time);
  });
}

repeat(() => console.log("repeat"), 5, 1000);
