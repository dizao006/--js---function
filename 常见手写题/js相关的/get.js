const obj = {
  a: {
    b: 123,
  },
  arr: [
    {
      demo: "demo",
    },
  ],
};
function getKey(obj, str) {
  if (/\[/g.test(str)) {
    str = str.replaceAll(/\[/g, ".").replaceAll(/\]/g, "");
  }
  const keyArr = str.split(".");
  for (const k of keyArr) {
    obj = obj[k];
  }
  return obj;
}
console.log(getKey(obj, "a.b"));
console.log(getKey(obj, "arr[0].demo"));
