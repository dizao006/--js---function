function log(fn: () => void) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      resolve(await fn());
    }, 1000);
  });
}

async function run() {
  for (let i = 0; i < 5; i++) {
    await log(() => console.log(i));
  }
}
run();
