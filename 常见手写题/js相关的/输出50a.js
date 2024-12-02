// 输入50a6we8y20x 输出50个a，6个we，8个y，20个x

function log(len) {
  let left = 0;
  let str = "";
  let number = "";
  while (left < len.length) {
    if (isNaN(Number(len[left]))) {
      str += len[left];
      if (!isNaN(Number(len[left + 1]))) {
        for (let i = 0; i < +number; i++) {
          console.log(str);
        }
        str = "";
        number = "";
      }
    } else {
      number += len[left];
    }
    left++;
  }
  for (let i = 0; i < +number; i++) {
    console.log(str);
  }
}

function print(str) {
  return String(str).replace(/(\d+)([a-zA-Z]+)/g, function (_, number, string) {
    return string.repeat(number);
  });
}
console.log(print("50a6we8y20x"));
