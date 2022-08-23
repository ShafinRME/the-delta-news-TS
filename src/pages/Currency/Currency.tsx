import { useEffect, useState } from "react";
import { CurrencyNews } from "./types";

const Currency = () => {
  const [currency, setCurrency] = useState<CurrencyNews | null>(null);
  // const [key, setKey] = useState<SetStateAction<string[] >>();
  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=USD")
      .then((res) => res.json())
      .then((data) => {
        setCurrency(data);

      //   const keyData = Object.keys(data.rates);
      //  setKey(keyData)
      //  console.log(key)
      });
  }, []);

  return (
    <div>
   
      <h1>{currency?.rates.USD}</h1>
      <h1>{currency?.rates.AED}</h1>
      <h1>{currency?.rates.EUR}</h1>
      <h1>{currency?.rates.QAR}</h1>
      <h1>{currency?.rates.BDT}</h1>
    </div>
  );
};

export default Currency;
