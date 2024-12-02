// 对输入的字符串：去除其中的字符'b'；去除相邻的'a'和'c'。 #119

function removeChars(str) {
  //   let check = [];

  //   for (let i = 0; i < str.length; i++) {
  //     // if (str[i] === "b") continue;
  //     if (str[i] === "a") {
  //       if (check[check.length - 1] !== "c") {
  //         check.push(str[i]);
  //       } else {
  //         check.pop();
  //         continue;
  //       }
  //     } else if (str[i] === "c") {
  //       if (check[check.length - 1] !== "a") {
  //         check.push(str[i]);
  //       } else {
  //         check.pop();
  //         continue;
  //       }
  //     } else {
  //       check.push(str[i]);
  //     }
  //   }

  //   return check.filter((e) => e !== "b");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "b") continue;
    if (
      (str[i] == "a" && str[i + 1] === "c") ||
      (str[i] === "c" && str[i - 1] === "a")
    ) {
      continue;
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(removeChars("abcabcaccaasds"));
