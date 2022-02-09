const talkingCalendar = (date) => {
  let dateArr = date.split("/");
  let year = Number(dateArr[0]);
  let month = Number(dateArr[1]);
  let day = Number(dateArr[2]);

  const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if (day === 1 || day === 21 || day === 31) {
    day += "st";
  } else if (day === 2 || day === 22) {
    day += "nd";
  } else if (day === 3 || day === 23) {
    day += "rd";
  } else {
    day += "th";
  }
}

console.log(talkingCalendar("2017/12/02"));