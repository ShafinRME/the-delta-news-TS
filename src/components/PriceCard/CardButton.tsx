import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AllSlots } from "../../hooks/AllServicesData";

interface Props {
  plan: AllSlots;
  setBookingServices: (
    event: AllSlots
  ) => void | React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const CardButton: React.FC<Props> = ({ setBookingServices, plan }) => {
  return (
    <>
      <label
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          setBookingServices(plan)
        }
        htmlFor="booking-modal"
        className={`PackageBtn ${
          plan.slot?.length
            ? `${
                plan.mostPopular
                  ? " bg-primary-content  "
                  : " bg-error-content   "
              }`
            : "btn btn-disabled bg-gray text-black"
        } w-full flex opacity-80 hover:opacity-100  transition-opacity duration-300 border-0 mt-8   justify-center px-6 py-4 text-sm uppercase text-white  font-semibold leading-4 text-center rounded-full`}
      >
        <span className="mr-1.5">{plan.btn}</span>
        <span className=" PackageBtn-Icon">
          <HiOutlineArrowNarrowRight />
        </span>{" "}
      </label>
    </>
  );
};

export default CardButton;
