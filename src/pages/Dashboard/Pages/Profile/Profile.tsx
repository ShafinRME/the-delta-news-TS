import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../config/firebaseConfig.init";

const Profile = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="card w-96 bg-base-200 shadow-sm">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src={user?.photoURL! as string}
                alt={user?.displayName! as string}
              />
            </div>
          </div>
          <h2 className="card-title">
            {user?.displayName}
          </h2>
          <p>{user?.email}</p>
          <div className="card-actions">
            <div className="badge badge-outline">Admin</div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
