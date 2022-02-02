import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Quotes } from "./Quotes";
import { WeatherForecast } from "./WeatherForecast";
function App() {
  return (
    <div className="App">
      <WeatherForecast></WeatherForecast>
      <Quotes></Quotes>
    </div>
  );
}

export default App;
