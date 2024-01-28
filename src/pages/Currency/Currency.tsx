import { useEffect, useState } from "react";
import { CurrencyNews } from "./types";

const Currency = () => {
  const [currency, setCurrency] = useState<CurrencyNews | null>(null);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=USD")
      .then((res) => res.json())
      .then((data) => {
        setCurrency(data);
      });
  }, []);

  return (
    <div>
      {/* <h1 classNameName="uppercase">usd {currency?.rates.USD.toFixed(0)}</h1>
      <h1 classNameName="uppercase"></h1>
      <h1 classNameName="uppercase"></h1>
      <h1 classNameName="uppercase"></h1>
      <h1 classNameName="uppercase"></h1> */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Currency in USD</th>
              {/* <th>Favorite Color</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>USD</td>
              <td>{currency?.rates.USD.toFixed(0)}</td>
              {/* <td>Blue</td> */}
            </tr>

            <tr>
              <th>2</th>
              <td>AED</td>
              <td> {currency?.rates?.AED.toFixed(0)}</td>
              {/* <td>Purple</td> */}
            </tr>

            <tr>
              <th>3</th>
              <td>EUR</td>
              <td> {currency?.rates.EUR.toFixed(0)}</td>
              {/* <td>Red</td> */}
            </tr>
            <tr>
              <th>4</th>
              <td>QAT</td>
              <td> {currency?.rates.QAR.toFixed(0)}</td>
              {/* <td>Red</td> */}
            </tr>
            <tr>
              <th>5</th>
              <td>BDT</td>
              <td>{currency?.rates.BDT.toFixed(0)}</td>
              {/* <td>Red</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Currency;
