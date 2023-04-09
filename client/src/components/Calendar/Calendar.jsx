import classes from "./Calendar.module.css";
import { useState } from "react";
import {
  arrOfMonths,
  arrOfWeekDays,
  formattedDaysOfTheMonth,
} from "./Calendar.util";
import Day from "../Day/Day";

const currentDay = new Date().getDate();
const Calendar = ({ blockPast }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const handleChangeYear = () => setCurrentYear((prev) => prev + 1);

  const handleChangeYearBack = () => {
    if (blockPast && currentYear < new Date().getFullYear() + 1) return;
    setCurrentYear((prev) => prev - 1);
  };

  const handleChangeMonth = () => {
    currentMonth === 11
      ? setCurrentMonth(0)
      : setCurrentMonth((prev) => prev + 1);
  };

  const handleChangeMonthBack = () => {
    if (blockPast && currentMonth < new Date().getMonth() + 1) return;
    currentMonth === 0
      ? setCurrentMonth(11)
      : setCurrentMonth((prev) => prev - 1);
  };

  return (
    <section className={classes.section}>
      <h2 className={classes.h2}>
        <span className={classes.span} onClick={handleChangeYearBack}>
          ◀️
        </span>
        {currentYear}{" "}
        <span className={classes.span} onClick={handleChangeYear}>
          ▶️
        </span>
      </h2>
      <h3 className={classes.h3}>
        <span className={classes.span} onClick={handleChangeMonthBack}>
          ◀️
        </span>{" "}
        {arrOfMonths[currentMonth]}{" "}
        <span className={classes.span} onClick={handleChangeMonth}>
          ▶️
        </span>
      </h3>
      <section className={classes.weekDays}>
        {arrOfWeekDays.map((wkDay, index) => (
          <p className={classes.pWeek} key={`weekDay_${index}`}>
            {wkDay}
          </p>
        ))}
      </section>
      <div className={classes.div}>
        {formattedDaysOfTheMonth(currentYear, currentMonth).map(
          (day, index) => (
            <Day
              key={`DAY_MONTH${index}`}
              day={day}
              currentDay={currentDay}
              currentMonth={currentMonth}
              currentYear={currentYear}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Calendar;
