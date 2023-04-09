export const arrOfMonths = [
  "Jan",
  "Fev",
  "Mar",
  "Abril",
  "Maio",
  "Junho",
  "Jul",
  "Agosto",
  "Set",
  "Out",
  "Nov",
  "Dec",
];

export const arrOfWeekDays = [
  "Dom",
  "Seg",
  "Ter",
  "Quar",
  "Quin",
  "Sex",
  "Sab",
];

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

const getDaysInMonth = (month = currentMonth, year = currentYear) =>
  new Date(year, month + 1, 0).getDate();

let firstOfTheMonthToWkDay = (year = currentYear, month = currentMonth) =>
  new Date(year, month, 0).getDay() + 1;

const arrOfDaysInMonth = (totalDays) => {
  let arrOfDays = [];
  for (let i = 1; i <= totalDays; i++) {
    arrOfDays.push(i);
  }
  return arrOfDays;
};

export const formattedDaysOfTheMonth = (year, month) => {
  let arr = arrOfDaysInMonth(getDaysInMonth(month));
  let firstMonthDayInTheWeekDay = firstOfTheMonthToWkDay(year, month);
  for (let i = 0; i < firstMonthDayInTheWeekDay; i++) {
    arr.unshift(null);
  }
  return arr;
};
