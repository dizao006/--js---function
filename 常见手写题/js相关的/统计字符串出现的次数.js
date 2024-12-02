function strNumber(str) {
  let reg = /[a-zA-Z]/;
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (reg.test(str[i])) {
      if (map.has(str[i])) {
        let num = map.get(str[i]);
        map.set(str[i], num + 1);
      } else {
        map.set(str[i], 1);
      }
    }
  }
  console.log(map);
}

strNumber("abcdeabdasjklhsafhgkjsdnioqwjldask123276543");
