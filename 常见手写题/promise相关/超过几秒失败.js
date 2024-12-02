function timeStop(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, time);
  });
}
function log() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("log");
    }, 4000);
  });
}

Promise.race([log(), timeStop(3000)])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
