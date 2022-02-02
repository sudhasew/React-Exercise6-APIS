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
        //console.log(data.data.properties.periods);
        setWeather(data.data.properties.periods);
      });
  }, []);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <ul>
        {weather.map((data) => (
          <li key={data.name}>
            Name: {data.name} | Temperature: {data.temperature} | Icon:
            {data.icon} | DetailedForecast: {data.detailedForecast}
          </li>
        ))}
      </ul>
    </div>
  );
}
