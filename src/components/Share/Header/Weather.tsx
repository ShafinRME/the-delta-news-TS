import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import SmallLoading from "../../Loading/SmallLoading";

const API_key = `b0d4ce51b0759ab8d2f7af06c0667dd4`;

const Weather = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  // const [weatherData, setWeatherData] = useState([]);
  // const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setLat(position.coords.latitude.toFixed(4));
  //     setLon(position.coords.longitude.toFixed(4));
  //   });
  // }, [lat, lon, error]);

  // const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${API_key}`;
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=23.7271409&lon=90.3654296&appid=b0d4ce51b0759ab8d2f7af06c0667dd4`;

  const { isLoading, data } = useQuery(["weatherData"], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <SmallLoading />;
  }

  return (
    <div className="flex justify-center items-center -mt-3 ">
      <div className="text-sm">
        <p className="text-primary-content text-sm font-semibold">
          <span>{data?.name} </span>
          <span className="font-bold">
            {(data?.main.feels_like.toFixed(0) - 273.15).toFixed(0)}&#176;
          </span>
          C
        </p>
      </div>

      <div className="flex justify-center items-center ml-2">
        <p className="text-primary-content  text-sm font-semibold">
          {data?.weather[0].main}
        </p>
        <img
          className="text-primary"
          src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
          alt="weather icon"
          width="50"
          height="50"
        />
      </div>
    </div>
  );
};

export default Weather;
