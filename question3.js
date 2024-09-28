const numberDay = prompt("Введите количество дней");
const days = parseInt(numberDay);
// console.log(typeof days);
const millsecPerDay = 24 * 60 * 60 * 1000;
// console.log(millsecPerDay);

function addDays() {
  // console.log(date);
  const daysForMllisec = days * millsecPerDay;
  //   console.log(daysForMllisec);
  const date = new Date(Date.now() + daysForMllisec);
  console.log(new Date()); /* Вывел для удобства*/

  return date;
}
console.log(addDays());
