function duichenNum(coun = 10000) {
  let arr = [];
  for (let i = 0; i < coun; i++) {
    let fanzhuan = Array.from(i.toString()).reverse().join("");
    if (i == fanzhuan) {
      arr.push(i);
    }
  }
  console.log(JSON.stringify(arr));
}
duichenNum(1000);
