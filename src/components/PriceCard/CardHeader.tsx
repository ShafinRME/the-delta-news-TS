import React from "react";
import { AllSlots } from "../../hooks/AllServicesData";

interface Props {
  plan: AllSlots;
}

const CardHeader: React.FC<Props> = ({ plan }) => {
  // console.log(plan);
  return (
    <>
      <h3 className="text-lg  font-semibold leading-5 text-accent-content ">
        {plan.title}
      </h3>
      {plan.mostPopular && (
        <p className="absolute  top-0 -translate-y-1/2 bg-primary-content px-3 py-0.5 text-sm font-semibold tracking-wide text-base-100 rounded-full shadow-md">
          {"Most Popular"}
        </p>
      )}
      <p className="mt-4 leading-6 text-secondary-content">
        {plan.description}
      </p>
      <div className="mt-4 rounded-lg  p-6 -mx-6">
        <p className="text-sm font-semibold text-secondary-content flex items-center">
          <span>{plan.currency}</span>
          <span className="text-4xl text-neutral-content">${plan.price}</span>
          <span className="ml-1.5">{plan.frequency}</span>
        </p>
      </div>
    </>
  );
};

export default CardHeader;
