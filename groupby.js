// Object.groupBy() //下面是手写该方法

// function groupBy(array, keyFn) {
//   return array.reduce((acc, item) => {
//     const key = keyFn(item);
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(item);
//     return acc;
//   }, {});
// }


//

//   let obj={}
//   for (let i = 0; i < peoples.length; i++) {
//     let age = peoples[i].age;
//     if (obj[age]) {
//       obj[age].push(peoples[i]);
//     } else {
//       obj[age] = [peoples[i]];
//     }
//   }




const inventory = [{
    name: "芦笋",
    type: "蔬菜",
    quantity: 5,
    pice: 200
  },
  {
    name: "香蕉",
    type: "水果",
    quantity: 0,
    pice: 100
  },
  {
    name: "山羊",
    type: "肉",
    quantity: 23,
    pice: 200
  },
  {
    name: "樱桃",
    type: "水果",
    quantity: 5,
    pice: 300
  },
  {
    name: "鱼",
    type: "肉",
    quantity: 22,
    pice: 500
  },
];

let obj = {}
for (let i = 0; i < inventory.length; i++) {
  let quantity = inventory[i].quantity
  if (obj[quantity]) {
    obj[quantity].push(inventory[i])
  } else {
    obj[quantity] = [inventory[i]]
  }
}
console.log(obj);

// let result = Object.groupBy(inventory, (e) => e.type)
// console.log(result);
// function gb(obj, gbroup) {
//   let result = {}
//   for (let i = 0; i < obj.length; i++) {
//     let s = obj[i]
//     let fen = s[gbroup]
//     if (result[fen]) {
//       //如果存在对应的key值，则push
//       result[fen].push(obj[i])
//     } else {
//       //如果不存在则把值放入数组添加到对象里
//       result[fen] = [obj[i]]
//     }
//   }
//   return result
// }
// let s = gb(inventory, 'pice')
// console.log(s)
// console.info(inventory);