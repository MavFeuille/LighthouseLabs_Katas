const talkingCalendar = (date) => {
  let dateArr = date.split("/");
  let year = Number(dateArr[0]);
  let month = Number(dateArr[1]);
  let day = Number(dateArr[2]);

  const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let monthOutput = monthName[month - 1];

  if (day === 1 || day === 21 || day === 31) {
    day += "st";
  } else if (day === 2 || day === 22) {
    day += "nd";
  } else if (day === 3 || day === 23) {
    day += "rd";
  } else {
    day += "th";
  }

  return `${monthOutput} ${day}, ${year}`;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));