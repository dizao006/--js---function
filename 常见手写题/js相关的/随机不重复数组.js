function randomArr(len = 100, min = 0, max = 200) {
  if (len > max) return false;
  let result = new Array(len);
  for (let i = 0; i < len; i++) {
    let data = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result.indexOf(data) === -1) {
      result[i] = data;
    } else {
      i--;
    }
  }
  console.log(result);
}

randomArr(100, 50, 200);
