import classes from "./Day.module.css";
const Day = ({ day, currentDay, currentMonth, currentYear }) => {
  return (
    <p
      className={
        (day !== null && day >= currentDay) ||
        currentMonth !== new Date().getMonth() ||
        currentYear !== new Date().getFullYear()
          ? classes.p
          : classes.pUnavailable
      }
    >
      {day}
    </p>
  );
};

export default Day;
