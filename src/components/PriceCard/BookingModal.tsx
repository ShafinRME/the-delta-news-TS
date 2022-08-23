import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AllSlots } from "../../hooks/AllServicesData";
// import auth from "../firebaseConfig.init";
interface Props {
  bookingServices: AllSlots;
  setBookingServices: (
    event: AllSlots | null
  ) => void | React.MouseEventHandler<HTMLButtonElement> | undefined;
}

// interface user {
//   displayName: undefined | string;
//   email: string | undefined;
// }

const BookingModal: React.FC<Props> = ({
  setBookingServices,
  bookingServices,
}) => {
  // const [user] = useAuthState(auth);
  // const name = user?.displayName;

  const { _id, title } = bookingServices;

  const handleBooking = (data: any) => {
    data.preventDefault();
    const slot = data.target.slot.value;
    console.log(slot, _id, title);
    setBookingServices(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box bg-bas">
          {/* most popular text */}
          {bookingServices.mostPopular && (
            <p className="flex w-32 text-center -mt-10 sticky  top-0 -translate-y-1/2 bg-primary-content px-3 py-0.5 text-sm font-semibold tracking-wide text-base-100 rounded-full shadow-md">
              {"Most Popular"}
            </p>
          )}

          {/* model cancel button */}
          <label
            htmlFor="booking-modal"
            className="sticky flex flex-row-reverse text-3xl text-red-500  right-2 top-0"
          >
            <IoMdCloseCircleOutline />
          </label>

          {/* mobile title */}
          <h3 className="font-bold text-2xl text-center">{title}</h3>

          {/* modal from */}
          <form
            onSubmit={handleBooking}
            className="text-xl text-black text-center my-5"
          >
            <select
              placeholder="Select your date"
              required
              name="slot"
              className={`select mb-5 ${
                bookingServices.mostPopular
                  ? " select-primary  "
                  : " select-error  "
              }  w-full max-w-xs`}
            >
              <option disabled selected>
                Select your date
              </option>
              {bookingServices?.slot?.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              required
              name="name"
              type="name"
              placeholder="Name"
              className={`input input-bordered input-primary w-full max-w-xs ${
                bookingServices.mostPopular
                  ? " input-primary  "
                  : " input-error  "
              }`}
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className={`input my-5 input-bordered  w-full max-w-xs${
                bookingServices.mostPopular
                  ? " input-primary  "
                  : " input-error  "
              }`}
            />
            <input
              required
              name="phone"
              type="number"
              placeholder="Phone number"
              className={`input input-bordered input-primary w-full max-w-xs ${
                bookingServices.mostPopular
                  ? " input-primary  "
                  : " input-error  "
              }`}
            />
            <input
              required
              name="address"
              type="text"
              placeholder="Address"
              className={`my-5 input input-bordered input-primary w-full max-w-xs ${
                bookingServices.mostPopular
                  ? " input-primary  "
                  : " input-error  "
              }`}
            />
            <input
              required
              readOnly
              name="price"
              type="price"
              value={`$ ${bookingServices.price}`}
              className={` input input-bordered input-primary w-full max-w-xs ${
                bookingServices.mostPopular
                  ? " input-primary  "
                  : " input-error  "
              }`}
            />

            <input
              type="submit"
              value="continue"
              placeholder="Type here"
              className={` btn mx-auto btn-wide my-5  ${
                bookingServices.mostPopular
                  ? " bg-primary-content  "
                  : " bg-error-content   "
              } opacity-80 hover:opacity-100 flex transition-opacity duration-300 border-0   justify-center px-6 py-4 text-sm uppercase text-white  font-semibold leading-4 text-center rounded-full`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
