import { useEffect } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../config/firebaseConfig.init";
import useToken from "../../../hooks/useToken";
import Loadings from "../../Loading/Loadings";
import { locationProps } from "../../../utility/Typs";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);

  const [token] = useToken(googleUser || fbUser);
  // Google singing
  const handleGoogleSignIn = (): void => {
    signInWithGoogle();
  };
  // Facebook singing
  const handleFaceBookSignIn = (): void => {
    signInWithFacebook();
  };

  const navigate = useNavigate();

  const location: locationProps = useLocation();

  const from = location.state?.from?.pathname || "/";

  const TColor = "#00acee";
  const fColor = "#4267B2";

  const loginItems = [
    {
      id: 1,
      title: " Google",
      icon: <FcGoogle />,
      onclick: handleGoogleSignIn,
    },
    {
      id: 2,
      title: "Facebook",
      icon: <BsFacebook />,
      color: fColor,
      onclick: handleFaceBookSignIn,
    },
    {
      id: 3,
      title: "Twitter",
      icon: <BsTwitter />,
      color: TColor,
    },
  ];
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from, location]);

  if (googleLoading || fbLoading) {
    return <Loadings />;
  }
  return (
    <div>
      <div className="divider font-semibold">Or Sign in with</div>
      {/* all errors  */}
      {googleError && (
        <small className="text-sm font-medium text-red-500 text-center">
          {googleError.message}
        </small>
      )}
      {fbError && (
        <small className="text-sm font-medium text-red-500 text-center">
          {fbError.message}
        </small>
      )}
      {/* {twitterError && (
        <p className="text-sm font-medium text-primary text-center">
          {twitterError.message}
        </p>
      )}  */}
      <div className="flex justify-center items-center">
        {loginItems.map((item) => (
          <div key={item.id} className="my-2 mx-5">
            <button
              onClick={item.onclick}
              style={{ color: `${item.color}` }}
              className={`flex font-semibold text-2xl btn btn-ghost btn-circle `}
            >
              {item.icon}
            </button>
          </div>
        ))}
      </div>

      {/* <button
        type="button"
        className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
      >
        <svg
          className="mr-2 -ml-1 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
          ></path>
        </svg>
        Sign in with Facebook
      </button> */}
    </div>
  );
};

export default SocialLogin;
