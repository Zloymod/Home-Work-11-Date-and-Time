const nextBirthdayDate = new Date(2025, 9, 17);
// console.log(nextBirthdayDate);
// console.log(typeof nextBirthdayDate);

function getDaysBeforeBirthday() {
  const dateNow = Date.now();
  //   console.log(dateNow);
  const happyBirthday =
    (nextBirthdayDate.getTime() - dateNow) / 1000 / 60 / 60 / 24;
  return Math.round(happyBirthday);
}
console.log(getDaysBeforeBirthday());
