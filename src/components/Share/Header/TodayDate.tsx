// day
const dayIndex: number = new Date().getDay();
const getDayName = (dayIndex: number): string => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayIndex];
};
const dayName: string = getDayName(dayIndex);

// month

const monthIndex: number = new Date().getMonth();
const getMonthName = (monthIndex: number): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  return months[monthIndex];
};
const monthName: string = getMonthName(monthIndex);

console.log(dayName);

const date = new Date();
const fullDate = ` ${dayName}, ${monthName} ${
  date.getMonth() + 1
}, ${date.getFullYear()}`;

const TodayDate = () => {
  return <>{fullDate}</>;
  // return <><h1> hello </h1></>;
};

export default TodayDate;
