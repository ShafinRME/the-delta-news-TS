import { FC } from "react";
import TotalCardChart from "../Chart/TotalCardChart";

interface CardProps {
  title: string;
  total: string;
  details: string;
}

const TotalCard: FC<CardProps> = ({ title, total, details }) => {
  return (
    <>
      <div className=" grid grid-cols-2 px-8 py-6 items-center bg-base-200 rounded-lg">
        <div className="">
          <h1 className="text-sm font-medium text-secondary">{title}</h1>
          <h6 className="text-secondary text-xs font-bold pt-1">{details}</h6>
          <p className="text-3xl text-neutral-content font-semibold ">
            {total}
          </p>
        </div>
        <div className="flex justify-end items-center">
          <TotalCardChart />
        </div>
      </div>
    </>
  );
};

export default TotalCard;
