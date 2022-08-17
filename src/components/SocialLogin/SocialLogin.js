import React from "react";
import auth from "../../config/firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import Spinner from "../Share/Spinner/Spinner";
import { useRouter } from "next/router";
import { FaGoogle } from "react-icons/fa";
import { BsFacebook, BsTwitter } from "react-icons/bs";
// import useToken from "../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  const [signInWithTwitter, twitterUser, twitterLoading, twitterError] =
    useSignInWithTwitter(auth);

  const router = useRouter();
  // const [token] = useToken(GoogleUser || FbUser || TwitterUser);

  // Google singing
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  // Facebook singing
  const handleFacebookSignIn = () => {
    signInWithFacebook();
  };

  // Twitter singing
  const handleTwitterSignIn = () => {
    signInWithTwitter();
  };
  // all loading
  if (googleLoading || twitterLoading || fbLoading) {
    return <Spinner></Spinner>;
  }

  // redirect after login
  if ((googleUser || fbUser||twitterUser)) {
    
    router.push("/");
  }

  const gColor = "#EA4335";
  const TColor = "#00acee";
  const fColor = "#4267B2";


  const colors = {
    Estrutural: {
      bg: "bg-blue-500",
      text: "#EA4335",
    },
    Investimento: {
      bg: "bg-red-500",
      text: "#00acee",
    },
    Viagens: {
      bg: "bg-green-500",
      text: "#4267B2",
    },
  };
  const loginItems = [
    {
      id: 1,
      title: " Google",
      icon: <FaGoogle />,
      color: gColor,
      onclick: handleGoogleSignIn,
    },
    {
      id: 2,
      title: "Facebook",
      icon: <BsFacebook />,
      color: fColor,
      onclick: handleFacebookSignIn,
    },
    {
      id: 3,
      title: "Twitter",
      icon: <BsTwitter />,
      color: TColor,
      onclick: handleTwitterSignIn,
    },
  ];

  return (
    <div>
      <div className="divider  font-bold">or</div>
      <h3 className="text-sm text-center  font-medium text-secondary ">
        Continue With
      </h3>
      {/* all errors */}
      {googleError && (
        <p className="text-sm font-medium text-primary text-center">
          {googleError.message}
        </p>
      )}
      {fbError && (
        <p className="text-sm font-medium text-primary text-center">
          {fbError.message}
        </p>
      )}
      {twitterError && (
        <p className="text-sm font-medium text-primary text-center">
          {twitterError.message}
        </p>
      )}
      <div className="flex justify-center items-center">
        {loginItems.map((item) => (
          <div key={item.id} className="my-2 mx-5">
            <button
              onClick={item.onclick}
              className={`btn btn-ghost  font-semibold btn-circle hover:text-primary flex text-2xl`}
            >
              {item.icon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLogin;
