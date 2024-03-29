import axios from "axios";

import { useState } from "react";

const API_key = `b0d4ce51b0759ab8d2f7af06c0667dd4`;
interface WeatherProps {
  weatherdata: {
    description: string;
    icon: string;
    id: number;
    main: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
}

const Weather = () => {
  const [weather, setWeather] = useState<WeatherProps | null>(null);
  const [location, setLocation] = useState("");
  const [celsius, setCelsius] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`;

  const searchLocation = (event: any) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        if (response.status === 200) {
          setWeather(response.data);
          const celsius = (response.data.main.feels_like - 273.15).toFixed(0);
          setCelsius(celsius);
          console.log(response.status);
        }if(response.status === 404){
          setCelsius('error');
          console.log();
        }
      });

      setLocation("");
    }
  };

  console.log(weather)

  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative flex flex-col  justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 z-10">
        <div className="search">
          <input
            className="text-black-300 text-center border py-3 focus:transition-colors duration-300 w-full focus:outline-none focus:border focus:border-primary"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>
        {/* Top */}

        <div className="relative flex justify-between pt-12  text-gray-800">
          <div className="flex flex-col items-center">
            {weather ? (
              <img
                src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                alt="/"
                width="100"
                height="100"
              />
            ) : null}
            {weather ? (
              <p className="text-2xl">{weather?.weather[0]?.description}</p>
            ) : null}
          </div>

          {weather ? <p className="lg:text-9xl text-7xl">{celsius}°C</p> : null}
        </div>
        {/* Bottom */}

        {weather ? (
          <div className="bg-white relative p-8 rounded-md">
            <p className="text-2xl text-center pb-6">
              Weather in {weather?.name}
            </p>
            <div className="flex justify-between text-center">
              <div>
                <p className="font-bold text-2xl">{celsius}°C</p>
                <p className="text-xl">Feels Like</p>
              </div>
              <div>
                <p className="font-bold text-2xl">{weather?.main?.humidity}%</p>
                <p className="text-xl">Humidity</p>
              </div>
              <div>
                <p className="font-bold text-2xl">
                  {weather?.wind?.speed.toFixed(0)} MPH
                </p>
                <p className="text-xl">Winds</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Weather;
