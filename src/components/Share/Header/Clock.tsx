import React, { useEffect, useState } from "react";
export default function Clock() {
  const [clock, setClock] = useState<null| string >(null);
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      console.log(date);
      setClock(date?.toLocaleTimeString());
    }, 1000);
  }, []);
  console.log(clock)
  return (
    <div>
      <h1>{clock}</h1>
    </div>
  );
}
