import { useEffect, useState } from "react";

const useToken = (user: any) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const currentUser = {
      email: email,
      name: name,
      role: "general",
    };
    console.log(currentUser);
    if (email) {
      fetch(`https://the-delta-times-server.vercel.app/api/users/${email}`, {
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
          console.log("user", data);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
