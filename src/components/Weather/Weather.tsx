import { useQuery } from "@tanstack/react-query";
import SmallLoading from "../Loading/SmallLoading";

const API_key = `b0d4ce51b0759ab8d2f7af06c0667dd4`;

const Weather = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${API_key}`;

  const { isLoading, data } = useQuery(["weatherData"], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <SmallLoading />;
  }
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">
          {(data?.main.feels_like.toFixed(0) - 273.15).toFixed(0)}&#176;
        </p>
      </div>
      {/* Bottom */}

      <div className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {(data?.main.feels_like.toFixed(0) - 273.15).toFixed(0)}&#176;
            </p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
