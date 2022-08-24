import React, { useEffect, useState } from 'react';
import CountryList from '../components/CovidTrack/CountryList';
import GlobalInfo from '../components/CovidTrack/GlobalInfo';
import type {ResponseData} from "../components/CovidTrack/typeOfCovid"


const Covid = () => {
    const [data, setData] = useState<ResponseData | undefined>(undefined);

    const fetchData = async () => {
        const result = await fetch("https://api.covid19api.com/summary");
        const data: ResponseData = await result.json();

        setData(data);
        console.log(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
<div>

      {data ? (
        <>
          <GlobalInfo
            Date={data?.Date}
            newConfirmed={data?.Global.NewConfirmed}
            newDeaths={data?.Global.NewDeaths}
            newRecovered={data?.Global.NewRecovered}
          />
          <hr />

          <CountryList
            countries={data.Countries}
          />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Covid;