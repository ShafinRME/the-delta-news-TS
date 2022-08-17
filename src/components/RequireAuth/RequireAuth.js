import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Link from 'next/link'
import Loading from "../Loading/Loading";
import auth from "../../config/firebase.init";
import VerifyUser from "../VerifyUser/VerifyUser";
import { useRouter } from "next/router";


const RequireAuth = ({ children }) => {
  //  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
 


  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user,router])

  if (loading) {
    return <Loading />;
  }
  // if (!user) {
  //   return <Link href="/login" state={{ from: location }}  />;
  // }
 
  // for verify user
  // if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
  //   return <VerifyUser />;
  // }
  return children;
};

export default RequireAuth;
