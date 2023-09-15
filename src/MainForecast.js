import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function MainForecast(props) {
  return (
    <div className="MainForecast">
      <div className="Forecast row main-forecast-frame">
        <h1>{props.weatherData.city}</h1>

        <div className="col-sm-4">
          <div className="main-temp">
            <span>{Math.round(props.weatherData.temperature)} </span>
            <span className="unit">°C</span>
          </div>
        </div>

        <div className="col-sm-4 main-weather-icon pt-1">
          <WeatherIcon code={props.weatherData.icon} size={70} />
        </div>
        <div className="col-sm-4">
          <ul>
            <li className="weather-description">
              {props.weatherData.description}
            </li>
            <li>
              Wind: <span>{Math.round(props.weatherData.wind)}</span>
              <span className="wind-speed">km/hr</span>
            </li>
            <li>
              Humidity: <span>{props.weatherData.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
