import React from "react";
import FiveDayForecast from "./FiveDayForecast";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row main-forecast-frame">
        <h1>Pretoria</h1>
        <div className="col main-temp">
          <span>23 </span>
          <span className="unit">°C</span>
        </div>
        <div className="col main-weather-icon">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="icon"
            className="mt-3 ms-2"
          />
        </div>
        <div className="col">
          <ul>
            <li className="weather-description">Clear Sky</li>
            <li>
              Wind: <span>3</span>
              <span className="wind-speed">km/hr</span>
            </li>
            <li>
              Humidity: <span>18</span>%
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <FiveDayForecast />
    </div>
  );
}
