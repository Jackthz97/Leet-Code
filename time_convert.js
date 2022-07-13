// intervals = ["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]
const convertTime = (stringTime) => {
  let arr = [];
  let arrLs = [];
  for (let x = 0; x < stringTime.length; x++) {
    let [i, j] = stringTime[x].split("-");
    if (i[5] === "P") {
      let [h,m] = i.split(":");
      if (parseInt(h) !== 12) {
        h = parseInt(h) + 12;
        arr.push(h, parseInt(m));
        arrLs.push(arr);
      } else {
        arr.push(parseInt(h), parseInt(m));
        arrLs.push(arr);
      }
    }
    if (j[5] === "P") {
      let [h,m] = j.split(":");
      if (parseInt(h) !== 12) {
        h = parseInt(h) + 12;
        arr.push(h, parseInt(m));
        arrLs.push(arr);
      } else {
        arr.push(parseInt(h), parseInt(m));
        arrLs.push(arr);
      }
    }
  }
  return arrLs;
};

console.log(convertTime(["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]));