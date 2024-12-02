function randomStr(len) {
  let result = "";
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65));
  }
  console.log(result);
}

randomStr(100);
