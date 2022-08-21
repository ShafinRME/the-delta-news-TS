import { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../components/firebaseConfig.init";
import SocialLogin from "../../components/Share/SocialSignIn/SocialSignIn";
interface FormValues {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let emailErrorElement;

  useEffect(() => {
    if (emailUser) {
      navigate("/signin");
    }
  }, [emailUser, navigate]);

  if (emailLoading || updating) {
    return <p>Loading</p>;
  }
  if (emailError) {
    emailErrorElement = (
      <small className="text-sm font-medium text-primary text-center">
        {emailError.message}
      </small>
    );
  }
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const name: string = data.name;
    const email: string = data.email;
    const password: string = data.password;
    await updateProfile({ displayName: name });
    await createUserWithEmailAndPassword(email, password);
    toast.success("Sign Up Success");
  };

  return (
    <>
      <div className="flex  justify-center items-center">
        <div className="rounded-none  max-w-sm w-full px-0 sm:border sm:border-warning mt-12 bg-base-100 shadow-sm">
          <div className="space-y-3 py-4 sm:px-8 ">
            <div className="flex justify-center pt-4">
              <BsFillPersonPlusFill className="text-6xl mb-4" />
            </div>
            <form className=" items-center" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full  ">
                {/*   <label className="label">
                    <span className="label-text font-bold">Your name</span>
                  </label> */}
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="name"
                  placeholder="Name"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-3 border bg-transparent border-warning focus:border-main placeholder-four  text-four focus:border-transparent focus:outline-none   focus:ring-[1px] focus:ring-primary-content   focus:ring-mains focus:border-mains focus:z-10 sm:text-sm"
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {" "}
                      {errors.name.message}{" "}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full  ">
                {/* <label className="label">
                    <span className="label-text font-bold">Your email</span>
                  </label> */}
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Provide a valid email",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-3 border bg-transparent border-warning focus:border-main placeholder-four  text-four focus:border-transparent focus:outline-none   focus:ring-[1px] focus:ring-primary-content"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {" "}
                      {errors.email.message}{" "}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {" "}
                      {errors.email.message}{" "}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full  ">
                {/* <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label> */}
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 8,
                      message: "Password Must be 8 characters or longer",
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                      message:
                        "Contain at least 8 characters 1 number 1 lowercase 1 uppercase contains only 0-9a-zA-Z",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="mb-2 appearance-none rounded-none relative block w-full px-3 py-3 border bg-transparent border-warning focus:border-main placeholder-four  text-four focus:border-transparent focus:outline-none   focus:ring-[1px] focus:ring-primary-content"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
                {emailErrorElement}
                <button
                  className=" group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium  text-white bg-error focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mains opacity-95 hover:opacity-100 hover:transition-opacity hover:duration-500  "
                  type="submit"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <HiUserAdd
                      className="h-5 w-5 text-white "
                      aria-hidden="true"
                    />
                  </span>
                  Sign up
                </button>
              </div>
            </form>
            <div className="pt-2">
              <small className="font-bold">Already have an account </small> ?
              &nbsp;
              <Link to="/signIn">
                <small className="font-bold text-primary">Please sign in</small>
              </Link>
            </div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
