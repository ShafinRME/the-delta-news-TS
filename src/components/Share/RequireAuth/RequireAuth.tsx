import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebaseConfig.init";

const RequireAuth = ({children}: { children: JSX.Element }) => {
  const [user,loading]=useAuthState(auth);
    const location = useLocation();

    if(loading){
      return <p>Loading ...</p>
    }

  if(!user){
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

   return children;
};

export default RequireAuth;