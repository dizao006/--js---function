function printTriangle(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    // 添加左侧的空格
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    // 添加星号
    for (let k = 0; k < 2 * i + 1; k++) {
      str += "*";
    }

    console.log(str);
  }
}

printTriangle(5);
