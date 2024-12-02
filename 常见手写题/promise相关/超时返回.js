function reProm(pro) {
  let err = () => {
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        reject("err");
      }, 1000);
    });
  };
  return Promise.race([pro, err()]);
}

const pA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功了");
  }, 1800);
});
reProm(pA).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
