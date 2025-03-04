const target = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};
function isObj(value) {
  let typ = Object.prototype.toString.call(value).slice(8, -1);
  return typ === "Object" || typ === "Array";
}

function observe(obj) {
  for (const key in obj) {
    let v = obj[key];
    if (isObj(v)) {
      observe(v);
    }
    Object.defineProperty(obj, key, {
      get() {
        console.log("get property");
        return v;
      },
      set(val) {
        if (val !== v) {
          console.log("set property");
          v = val;
        }
      },
    });
  }
}
observe(target);
target.name = "ss";

const target2 = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

function createProxy(target) {
  return new Proxy(target, {
    get(target, prop, reciver) {
      console.log(reciver);
      console.log(`Getting property "${prop}"`);
      const value = Reflect.get(target, prop, reciver);
      if (isObj(value)) {
        createProxy(value);
      }
      return value;
    },
    set(target, prop, value, reciver) {
      console.log(reciver);
      console.log(`Setting property "${prop}" to ${value}`);
      return Reflect.set(target, prop, value, reciver);
    },
    deleteProperty(target, prop) {
      console.log(`Deleting property "${prop}"`);
      return Reflect.deleteProperty(target, prop);
    },
  });
}

const proxy = createProxy(target2);
proxy.name;
