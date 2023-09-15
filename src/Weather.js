import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import MainForecast from "./MainForecast";
import NewDate from "./NewDate";
import FiveDayForecast from "./FiveDayForecast";
import { Oval } from "react-loader-spinner";

export default function Weather(props) {
  const [forecast, setForecast] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setForecast({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  if (forecast.loaded) {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="forecast">Weather forecast</p>
              <p className="date">
                Last updated <NewDate date={forecast.date} />
              </p>
            </div>
            <div className="City col-sm-6">
              <form onSubmit={handleSubmit}>
                <input
                  className="enter-city"
                  type="search"
                  placeholder="Enter city"
                  onChange={handleCityInput}
                />
                <button className="search-btn" type="submit">
                  🔍
                </button>
              </form>
            </div>
          </div>
          <MainForecast weatherData={forecast} />
          <hr />
          <FiveDayForecast coordinates={forecast.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <Oval
          height={90}
          width={90}
          color="rgb(29, 97, 136)"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#rgb(29, 97, 136)"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
      </div>
    );
  }
}
