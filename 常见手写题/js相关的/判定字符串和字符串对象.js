let arr = ["hello", new String("123"), 123, true, {}, [], null];
let stringItems = arr.filter(
  (item) => typeof item === "string" || item instanceof String
);
console.log(stringItems);
