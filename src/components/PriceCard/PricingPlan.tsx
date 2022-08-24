import React, { useState } from "react";
import { AllSlots } from "../../hooks/AllServicesData";
// import pricingData from "../../data/pricingData";
import CardBody from "./CardBody";
import CardButton from "./CardButton";
import CardHeader from "./CardHeader";
import { MdEventAvailable } from "react-icons/md";
import BookingModal from "./BookingModal";

interface Props {
  data: AllSlots[];
}

const PricingPlan: React.FC<Props> = ({ data }) => {
  const [bookingServices, setBookingServices] = useState<AllSlots | null>(null);
  // console.log(bookingServices);

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-12   mx-auto mx-w-7xl sm:px-6 lg:px-8 ">
        {data?.map((plan) => (
          <div
            key={plan.title}
            className="relative p-8 bg-base-100 ring-1 ring-slate-900/5 shadow-lg border border-warning max-w-sm  rounded-2xl flex-col "
          >
            <CardHeader plan={plan} />

            <span className="flex gap-2">
              <MdEventAvailable className="text-2xl text-green-400" />
              <p
                className={
                  plan.slot?.length
                    ? "font-bold text-green-500"
                    : "font-bold text-red-500"
                }
              >
                {" "}
                Slot available: <span className="">{plan.slot?.length}</span>
              </p>
            </span>
            {/* features */}
            <ul className="mt-6 mb-3 space-y-4 flex-1">
              {plan?.features?.map((feature) => (
                <CardBody key={feature} feature={feature} />
              ))}
            </ul>
            <span className=" font-bold text-red-500 mt-5 -mb-5">
              {plan.slot?.length ? (
                <p>
                  <span className=" text-green-500">Available date:</span>{" "}
                  <span className="text-secondary">{plan.slot[0]}</span>
                </p>
              ) : (
                "No slot available. Try another day"
              )}
            </span>

            {/* Button for purchase */}

            <CardButton plan={plan} setBookingServices={setBookingServices} />
          </div>
        ))}
      </div>
      {bookingServices && (
        <BookingModal
          setBookingServices={setBookingServices}
          bookingServices={bookingServices}
        />
      )}
    </div>
  );
};

export default PricingPlan;
