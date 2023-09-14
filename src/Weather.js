import React, { useState } from "react";
import "./Weather.css";
import FiveDayForecast from "./FiveDayForecast";
import axios from "axios";

export default function Weather(props) {
  const [forecast, setForecast] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data.main.temp);

    setForecast({
      loaded: true,
      city: response.data.name,
      date: "Thursday, 06:30",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (forecast.loaded) {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="forecast">Weather forecast</p>
              <p className="date">
                Last updated <span>{forecast.date}</span>
              </p>
            </div>
            <div className="City col-sm-6">
              <form>
                <input
                  className="enter-city"
                  type="search"
                  placeholder="Enter city"
                />
                <button className="search-btn" type="submit">
                  🔍
                </button>
              </form>
              <button className="btn w-100 current-location-btn">
                Current Location
              </button>
            </div>
          </div>
          <div className="Forecast">
            <div className="Forecast row main-forecast-frame">
              <h1>{forecast.city}</h1>
              <div className="col-sm-4">
                <div className="main-temp">
                  <span>{Math.round(forecast.temperature)} </span>
                  <span className="unit">°C</span>
                </div>
              </div>
              <div className="col-sm-4 main-weather-icon">
                <img src={forecast.iconUrl} alt="icon" className="ms-5" />
              </div>
              <div className="col-sm-4">
                <ul>
                  <li className="weather-description">
                    {forecast.description}
                  </li>
                  <li>
                    Wind: <span>{Math.round(forecast.wind)}</span>
                    <span className="wind-speed">km/hr</span>
                  </li>
                  <li>
                    Humidity: <span>{forecast.humidity}</span>%
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <FiveDayForecast />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
