import React from "react";

const dayIndex = new Date().getDay();
const getDayName = ({ dayIndex }: { dayIndex: string[] }) => {
  const days: string [] = [
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
const dayName = getDayName(dayIndex);

console.log(dayName);

const date = new Date();
const fullDate = ` ${dayName}-${date.getDate()}-${
  date.getMonth() + 1
}-${date.getFullYear()}`;

const TodayDate = () => {
  return <>{fullDate}</>;
};

export default TodayDate;
