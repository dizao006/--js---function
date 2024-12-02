// const debounce = (fn, time = 1000) => {
//   let timer
//   return (...arges) => {
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn(...arges)
//     }, time)
//   }
// }

// function devounce2(fn, time = 1000) {
//   let timer;
//   return function (...arges) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, arges);
//     }, time);
//   };
// }

// function debounce3(fn, time = 1000) {
//   let timer;
//   return function (...arg) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, arg);
//     }, time);
//   };
// }

// function throttle(fn, time = 1000) {
//   let timer = 0;
//   return function (...arg) {
//     if (Date.now() - timer > time) {
//       timer = Date.now();
//       fn.apply(this, arg);
//     }
//   };
// }

// function s() {
//   console.log('s')
// }
// const s2 = devounce2(s, 500)
// s2()
