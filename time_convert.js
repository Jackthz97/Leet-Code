// intervals = ["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]
const convertTime = (stringTime) => {
  let timeArr = [];
  let convert = [];
  for (let time of stringTime) {
    let [time1, time2] = time.split("-");
    timeArr.push([time1, time2]);
  }
  for (let time of timeArr) {
    let [h,m] = time[0].split('PM');
    // console.log(h, m);
    if (m === '') {
      let [hh,mm] = time[0].split(":");
      hh = Number(hh) + 12;
      let [mm1, mm2] = mm.split('PM');
      mm1 = Number(mm1);
      console.log(hh, mm1);
      convert.push([hh, mm1]);
    }
    // console.log(time[0].split('PM'));
    // if (time[0].split('PM')) {
    //   let [h,m] = time[0].split(':');
    //   console.log([h,m]);
    // }
  }

  return convert;
};

console.log(convertTime(["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]));
