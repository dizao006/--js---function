arr = [
  {
    name: "可乐",
    categories: ["热门", "饮料"],
  },
  {
    name: "苹果",
    categories: ["热门", "食物"],
  },
  {
    name: "洗衣液",
    categories: ["生活用品"],
  },
];

let map = new Map();

arr.forEach((key, index) => {
  let { name, categories } = key;
  categories.forEach((e) => {
    if (map.has(e)) {
      map.get(e).push(name);
    } else {
      map.set(e, [name]);
    }
  });
});
console.log(Array.from(map));
