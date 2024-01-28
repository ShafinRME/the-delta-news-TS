import { useEffect, useState } from "react";
import { CurrencyNews } from "./types";

const HomeCurrency = () => {
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
      <div className="overflow-x-auto xl:max-w-full xl:mx-0 w-full md:max-w-2xl md:mx-0">
        <div className="w-full max-w-[19rem] mx-auto ">
        <h1 className="news-live-details-3 pt-2">
          Currency Base on 1 USD Dollar equals
        </h1>
        <p className="news-live-details-3 pt-1">Date:{currency?.date}</p>
        </div>
        <table className="table table-compact w-full max-w-[5rem] mx-auto ">
          <tbody className="text-xs font-semibold font-description text-neutral">
            <tr>
              <th>Country</th>
              <td>Currency</td>
              <td>Amount</td>
              <td>Name</td>
            </tr>
            <tr>
              <th>UAE</th>
              <td>AED</td>
              <td> {currency?.rates?.AED.toFixed(0)}</td>
              <td>Dirham</td>
            </tr>

            <tr>
              <th>EU</th>
              <td>EUR</td>
              <td> {currency?.rates?.EUR.toFixed(0)}</td>
              <td>Euro </td>
            </tr>
            <tr>
              <th>Qatar</th>
              <td>QAT</td>
              <td> {currency?.rates?.QAR.toFixed(0)}</td>
              <td>Qatari Riyal</td>
            </tr>
            <tr>
              <th>Bangladesh</th>
              <td>BDT</td>
              <td>{currency?.rates?.BDT.toFixed(0)}</td>
              <td>Taka</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeCurrency;
