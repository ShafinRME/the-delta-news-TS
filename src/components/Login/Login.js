import React, { useEffect, useState } from "react";
import { HiLockClosed } from "react-icons/hi";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../config/firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import LoginHeader from "../Share/LoginHeader/LoginHeader";
import Spinner from "../Share/Spinner/Spinner";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import RouteLink from "../Share/LoginRoutes/RouteLink";
import MainLayout from "../../layout/MainLayout";
import { BsPersonCircle } from "react-icons/bs";
import Link from "next/link";

// import useToken from "../hooks/useToken";

const Login = () => {
  //  const { user, login} = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, changePassError] =
    useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  // const [token] = useToken(user);

  let signInError;
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);
  if (loading || sending) {
    return <Spinner></Spinner>;
  }

  if (error || changePassError) {
    signInError = (
      <p className="text-sm font-medium text-primary">
        {error?.message || changePassError?.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    console.log(data);

    //  try{
    //   await login (data.email, data.password)
    //   router.push('dashboard')
    // } catch(err){
    //   console.log(err)
    // }
    // console.log( 'login data' ,data);
  };

  return (
    <>
      <MainLayout title="Login">
        <div className="flex justify-center items-center">
          <div className="rounded-none  max-w-sm w-full px-0 sm:border sm:border-warning mt-12 bg-base-100 shadow-sm">
            <div className=" space-y-3 py-4 sm:px-8 ">
              <div className="flex justify-center pt-4">
                <BsPersonCircle className="text-6xl mb-4" />
              </div>
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                    type="email"
                    placeholder="Your Email"
                    className="mb-2 appearance-none rounded-none relative block w-full px-3 py-3 border bg-transparent border-warning focus:border-main placeholder-four  text-four focus:border-transparent focus:outline-none   focus:ring-[1px] focus:ring-primary-content   focus:ring-mains focus:border-mains focus:z-10 sm:text-sm "
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full ">
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                    type="password"
                    placeholder="Your password"
                    className="mb-2 appearance-none rounded-none relative block w-full px-3 py-3 border bg-transparent border-warning focus:border-main placeholder-four  text-four focus:border-transparent focus:outline-none   focus:ring-[1px] focus:ring-primary-content   focus:ring-mains focus:border-mains focus:z-10 sm:text-sm "
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {" "}
                        {errors.password.message}{" "}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {" "}
                        {errors.password.message}{" "}
                      </span>
                    )}
                  </label>
                </div>
                {signInError}
                <button
                  className=" group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium  text-white bg-error hover:bg-mains focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mains opacity-95 hover:opacity-100 hover:transition-opacity hover:duration-500 "
                  type="submit"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <HiLockClosed
                      className="h-5 w-5 text-white "
                      aria-hidden="true"
                    />
                  </span>
                  Sign In
                </button>
              </form>

              <div className="flex items-center justify-between pt-2">
                <RouteLink
                  href="signup"
                  title="sign up"
                  description="New user Please !"
                />
                {/* forgot password */}
                <div className="text-sm">
                  <button
                    onClick={async () => {
                      await sendPasswordResetEmail(email);
                      toast("email Sent");
                    }}
                    className="text-primary-content hover:text-orange-700 font-semibold "
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <div className="div">
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Login;
