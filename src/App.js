import "./App.css";
import FiveDayForecast from "./FiveDayForecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p className="forecast">Weather forecast</p>
            <p className="date">
              Last updated <span>Saturday, 18:36</span>
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
            <h1>Pretoria</h1>
            <div className="col-sm-4">
              <div className="main-temp">
                <span>23 </span>
                <span className="unit">°C</span>
              </div>
            </div>
            <div className="col-sm-4 main-weather-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="icon"
                className="ms-5"
              />
            </div>
            <div className="col-sm-4">
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
      </div>
      <div className="github mt-3">
        This project was coded by{" "}
        <a
          href="https://melisa-shecodes-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Melisa Mureriwa
        </a>{" "}
        and it is open-sourced on{" "}
        <a
          href="https://github.com/LisaMure/react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Github{" "}
        </a>
      </div>
    </div>
  );
}
