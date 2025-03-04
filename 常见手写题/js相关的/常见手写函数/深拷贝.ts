function deepClone(obj) {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  let res;
  if (typeof obj == "object") {
    if (Array.isArray(obj)) {
      res = [];
      for (let i = 0; i < obj.length; i++) {
        res.push(deepClone([obj[i]]));
      }
    } else if (obj instanceof RegExp || obj.prototype === Date) {
      res = obj;
    } else {
      res = {};
      for (const key in obj) {
        res[key] = deepClone(obj[key]);
      }
    }
  } else {
    res = obj;
  }
  return res;
}
