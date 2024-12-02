function zipStr(str) {
  let index = 0;
  let left = 0;
  let right = 0;
  let strs = "";
  while (left < str.length) {
    if (str[left] !== str[right]) {
      strs = strs + (str[right] + index);
      right = left;
      index = 0;
    }
    left++;
    index++;
  }
  strs = strs + (str[right] + index);
  return strs;
}

zipStr("aabbccddeeffggaabbssssddada");
