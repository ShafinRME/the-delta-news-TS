import React from "react";
// import pricingData from "../../data/pricingData";
import CardBody from "./CardBody";
import CardButton from "./CardButton";
import CardHeader from "./CardHeader";
interface Props {
  data: {
    title: string;
    price: number;
    currency: string;
    frequency: string;
    description: string;
    features: string[];
    btn: string;
    mostPopular: boolean;
  }[];
}
const PricingPlan : React.FC<Props> = ({ data }) => {
  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-12   mx-auto mx-w-7xl sm:px-6 lg:px-8 ">
        {data.map((plan) => (
          <div
            key={plan.title}
            className="relative p-8 bg-base-100 ring-1 ring-slate-900/5 shadow-lg border border-warning max-w-sm  rounded-2xl flex-col "
          >
            <CardHeader
              plan={plan}
              title={plan.title}
              description={plan.description}
              currency={plan.currency}
              price={plan.price}
              frequency={plan.frequency}
              mostPopular="Most Popular"
            />
            {/* features */}
            <ul className="mt-6 space-y-4 flex-1">
              {plan.features.map((feature) => (
                <CardBody key={feature} feature={feature} />
              ))}
            </ul>

            {/* Button for purchase */}

            <CardButton plan={plan} btn={plan.btn} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
