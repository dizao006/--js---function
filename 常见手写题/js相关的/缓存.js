function catach(fn) {
  let cache = new Map();
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("cache");
      return cache.get(key);
    } else {
      let data = fn.apply(this, args);
      cache.set(key, data);
      return data;
    }
  };
}

function expensiveFunction(x) {
  console.log("Computing...");
  return x * x;
}
let cacheAft = catach(expensiveFunction);
console.log(cacheAft(5));
console.log(cacheAft(5));
