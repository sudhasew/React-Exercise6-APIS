import axios from "axios";
import { useEffect, useState } from "react";
//import { DataFetching } from "./Api";
import { Weather } from "./Weather";

export function WeatherForecast() {
  const [weather, setWeather] = useState<Weather[]>([]);

  useEffect(() => {
    axios
      .get("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
      .then((data: any) => {
        console.log(data.data.properties.periods[6]);
        setWeather(data.data.properties.periods);
      });
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <ul className="list-container">
        {weather?.map((data) => (
          <li key={data.number}>
            {data.name} <br />
            Temperature: {data.temperature} <br />
            <img src={data.icon}></img>
            <br />
            {data.detailedForecast}
          </li>
        ))}
      </ul>
    </div>
  );
}
