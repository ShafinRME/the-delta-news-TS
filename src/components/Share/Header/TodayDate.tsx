

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

console.log(dayName);

const date = new Date();
const fullDate = ` ${dayName}-${date.getDate()}-${
  date.getMonth() + 1
}-${date.getFullYear()}`;

const TodayDate = () => {
  return <>{fullDate}</>;
  // return <><h1> hello </h1></>;
};

export default TodayDate;
