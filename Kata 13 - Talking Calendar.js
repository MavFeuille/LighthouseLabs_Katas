const talkingCalendar = (date) => {
  let dateArr = date.split("/");
  let year = Number(dateArr[0]);
  let month = Number(dateArr[1]);
  let day = Number(dateArr[2]);

  const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}

console.log(talkingCalendar("2017/12/02"));