const axios = require("axios");

const source = axios.CancelToken.source();
console.log(source);

axios
  .get("/api/data", {
    cancelToken: source.token,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (axios.isCancel(error)) {
      console.log("请求已取消:", error.message);
    } else {
      console.error("请求出错:", error);
    }
  });

// 模拟某个条件下需要取消请求，比如用户点击了取消按钮
source.cancel("用户取消了请求");

/**
 *
 * 它的工作方式主要是在客户端忽略服务器后续返回的结果。Axios 在内部会检查取消令牌（CancelToken）的状态，一旦发现请求被取消，它就不会再处理服务器返回的数据，而是抛出一个取消请求的错误。这意味着从应用层的角度来看，好像请求被取消了，但底层的网络传输可能还在继续。
 * 例如，服务器可能仍在处理请求并发送数据，但 Axios 不会接收和处理这些数据。
 * axios是基于xhr的，没有真正意义上的请求取消，而aixos的请求取消实际上忽略服务器返回的结果，而无法中断网络传输
 * 而fetch则提供了可以中断数据传输的请求取消new AbortController()
 */
// fetch的请求取消

function fet() {
  let controller;
  async function test() {
    controller && controller.abort();
    controller = new AbortController();
    const list = await fetch("api/data", {
      signal: controller.signal,
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
  }
}
