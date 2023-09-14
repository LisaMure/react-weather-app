import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature main-temp">
        <span>{Math.round(props.celsius)} </span>
        <span className="unit">
          °C |
          <a href="/" class="text-decoration-none" onClick={displayFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature main-temp">
        <span>{Math.round(fahrenheit)} </span>
        <span className="unit">
          <a href="/" class="text-decoration-none" onClick={displayCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
