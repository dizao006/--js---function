let ajax1 = (url) => {
  return new Promise(async (resolve, reject) => {
    let data = fetch(url, { method: "GET" }).then((response) =>
      response.json()
    );
    resolve(data);
  });
};
let ajax2 = (url) => {
  return new Promise(async (resolve, reject) => {
    let data = fetch(url, { method: "GET" }).then((response) =>
      response.json()
    );
    resolve(data);
  });
};

let ajax3 = (url) => {
  return new Promise(async (resolve, reject) => {
    let data = fetch(url, { method: "GET" }).then((response) =>
      response.json()
    );
    resolve(data);
  });
};

async function run() {
  return await Promise.all([
    ajax1(`https://study.duyiedu.com/api/lyrics`),
    ajax2(`https://study.duyiedu.com/api/lyrics`),
    ajax3(`https://study.duyiedu.com/api/lyrics`),
  ]);
}
run().then((data) => {
  console.log(data);
});
