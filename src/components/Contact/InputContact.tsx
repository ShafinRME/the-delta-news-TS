import { SubmitHandler, useForm } from "react-hook-form";
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const InputContact = () => {
  interface FromInputs {
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    message: string;
  }

  const { register, handleSubmit, reset } = useForm<FromInputs>();
  const onSubmit: SubmitHandler<FromInputs> = (data) => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const phone = data.phone;
    const email = data.email;
    const description = data.message;
    const user = { firstName, lastName, phone, email, description };
    console.log(user);

    // post data to server

    fetch("https://the-delta-times-server.vercel.app/api/contacts", {
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

      console.log(user)
  };

  // reCaptcha

  // const [verified, setVerified] = useState(false);

  // function onChange(value: any) {
  //   console.log("Captcha value:", value);
  //   setVerified(value)
  // }
  return (
    <div className="relative flex flex-col justify-between text-accent-content text-opacity-70 pt-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col">
            <div className="">
              <label htmlFor="">First name</label>
            </div>
            <div className="border-b border-error-content">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-accent-content mr-3 py-1 px-2 leading-tight focus:outline-none "
                {...register("firstName", {required: true, pattern: /^[a-zA-Z]+$/, maxLength: 16})}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <label htmlFor="">Last name</label>
            </div>
            <div className="border-b border-error-content">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-accent-content mr-3 py-1 px-2 leading-tight focus:outline-none"
                {...register("lastName", {required: true, pattern: /^[a-zA-Z]+$/, maxLength: 16})}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-2">

          <div className="flex flex-col">
            <div>
              <label htmlFor="">Email Address</label>
            </div>
            <div className="border-b border-error-content">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-accent-content mr-3 py-1 px-2 leading-tight focus:outline-none"
                {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <label htmlFor="">Phone Number</label>
            </div>
            <div className="border-b border-error-content">
              <input
                type="number"
                className="appearance-none bg-transparent border-none w-full text-accent-content mr-3 py-1 px-2 leading-tight focus:outline-none"
                {...register("phone", {required: true, pattern:/^[0-9+-]+$/, minLength: 6, maxLength: 12})}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col border-b border-error-content">
          <label htmlFor="">Message</label>
          <textarea
            className="appearance-none bg-transparent border-none w-full text-accent-content mr-3 py-1 px-2 leading-tight focus:outline-none"
            {...register("message", {required: true, maxLength: 100})}
          ></textarea>
        </div>
        <div>
          {/* <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange} />,*/}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center justify-center bg-primary font-medium rounded-lg text-white hover:opacity-90 transition-opacity duration-300 max-w-[11rem] p-4"
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
