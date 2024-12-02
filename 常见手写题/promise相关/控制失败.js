function PromiseStop(pro) {
  let stop = false;
  let status = new Promise(async (resolve, reject) => {
    const handleResult = (result) => {
      if (stop) {
        reject({ status: "stop" });
      } else {
        resolve(result);
      }
    };

    pro.then(handleResult).catch(handleResult);
  });

  return {
    status,
    changeStop() {
      stop = true;
    },
  };
}

let pro = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 1000);
  });
};

let s = async () => {
  const { status, changeStop } = PromiseStop(pro());
  changeStop();
  try {
    let data = await status;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

s();
