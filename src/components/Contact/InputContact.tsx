import React from "react";
// import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from "react-hook-form";
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const InputContact = () => {
  interface FromInputs {
    name: any;
    phone: number;
    email: string;
    message: string;
  }

  const { register, handleSubmit, reset } = useForm<FromInputs>();
  const onSubmit: SubmitHandler<FromInputs> = (data) => {
    const name = data.name;
    const phone = data.phone;
    const email = data.email;
    const description = data.message;
    const user = { name, phone, email, description };

    // post data to server

    fetch("https://team-delta001.herokuapp.com/api/contacts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          toast.success(`Your Message has sent successfully`);
          reset();
        } else toast.error(`You message has failed to sent`);
      });
  };

  // reCaptcha

  // const [verified, setVerified] = useState(false);

  // function onChange(value: any) {
  //     console.log("Captcha value:", value);
  //     if(setVerified(true)){
  //     }
  //     else{
  //       toast.success('You are verified')
  //     }
  //   }
  return (
    <div className="relative z-10 bg-success rounded-xl shadow-lg p-8 text-black md:w-92">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <div>
          <label htmlFor="">Your name</label>
        </div>
        <div>
          <input
            // name="name"
            type="text"
            placeholder="Your name"
            className="ring-1 ring-error-content  rounded-md pl-3 md:pr-28 py-2 pr-12 outline-none focus:ring-2 focus:ring-error-content"
            {...register("name", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="">Phone Number</label>
        </div>
        <div>
          <input
            // name="phone"
            type="number"
            placeholder="Your number"
            className="ring-1 ring-error-content  rounded-md pl-3 md:pr-28 py-2 pr-12 outline-none focus:ring-2 focus:ring-error-content"
            {...register("phone", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="">Email Address</label>
        </div>
        <div>
          <input
            // name="email"
            type="email"
            placeholder="Your email"
            className="ring-1 ring-error-content  rounded-md pl-3 md:pr-28 py-2 pr-12 outline-none focus:ring-2 focus:ring-error-content"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="">Message</label>
        </div>
        <div>
          <textarea
            // name="message"
            placeholder="Message"
            rows={4}
            cols={22}
            className="ring-1 ring-error-content  rounded-md pl-3 pr-14 md:pr-28 py-2 outline-none focus:ring-2 focus:ring-error-content"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          {/* <ReCAPTCHA
                        
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //global key only for testing purpose
                        onChange={onChange}
                        />, */}
        </div>
        <div>
          <button
            type="submit"
            className="flex items-center justify-center bg-error-content font-medium rounded-lg text-white hover:opacity-90 transition-opacity duration-300 max-w-[11rem] p-4"
            // disabled={!verified}
          >
            SEND MESSAGE <FaTelegramPlane />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputContact;
