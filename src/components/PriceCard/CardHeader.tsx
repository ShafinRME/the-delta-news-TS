import React from "react";
import { Plan } from "./CardButton";

interface Props {
  title: string;
  description: string;
  currency: string;
  price: number;
  frequency: string;
  mostPopular: string | boolean;
  plan: Plan;
}

const CardHeader: React.FC<Props> = ({
  title,
  description,
  currency,
  price,
  frequency,
  mostPopular,
  plan,
}) => {
  return (
    <>
      <h3 className="text-lg  font-semibold leading-5 text-accent-content ">
        {title}
      </h3>
      {plan.mostPopular && (
        <p className="absolute  top-0 -translate-y-1/2 bg-primary-content px-3 py-0.5 text-sm font-semibold tracking-wide text-base-100 rounded-full shadow-md">
          {mostPopular}
        </p>
      )}
      <p className="mt-4 leading-6 text-secondary-content">{description}</p>
      <div className="mt-4 rounded-lg  p-6 -mx-6">
        <p className="text-sm font-semibold text-secondary-content flex items-center">
          <span>{currency}</span>
          <span className="text-4xl text-neutral-content">${price}</span>
          <span className="ml-1.5">{frequency}</span>
        </p>
      </div>
    </>
  );
};

export default CardHeader;
