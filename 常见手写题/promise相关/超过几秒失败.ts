function time(): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("ok");
    }, 4000);
  });
}

function rac(fn: Promise<any>) {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("err");
    }, 3000);
  });
  return Promise.race([fn, timeout]);
}
rac(time())
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log(e);
  });
