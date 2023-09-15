import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.forecastData.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.forecastData.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay card-body px-2">
      <h5 className="card-title mb-3 mx-1 forecast-date">{day()}</h5>
      <WeatherIcon code={props.forecastData.weather[0].icon} size={40} />
      <div className="forecast-temperatures">
        <span className="forecast-max-temp">{maxTemp()}</span>
        <span className="forecast-min-temp ms-2">{minTemp()}</span>
      </div>
    </div>
  );
}
