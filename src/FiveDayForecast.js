import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function FiveDayForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="FiveDayForecast mb-4">
        <p className="five-day-forecast">5 Day Weather Forecast</p>
        <div className="forecast-temp row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-sm-3" key={index}>
                  <div className="card">
                    <WeatherForecastDay forecastData={dailyForecast} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
