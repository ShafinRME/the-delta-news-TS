import { useEffect, useState } from "react";

const useToken = (user: any) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const photoUrl = user?.user?.photoURL;
    const currentUser = {
      email: email,
      name: name,
      photoUrl: photoUrl,
      role: "general",
    };
    if (email) {
      fetch(`http://localhost:5000/api/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
          setToken(data);
        });
    }
    console.log(currentUser)
  }, [user]);
  return [token];
};

export default useToken;
