import "./App.css";
import Date from "./Date";
import EnterCity from "./EnterCity";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <p className="forecast">Weather forecast</p>
        <Date />
        <EnterCity />
        <Forecast />
      </div>
      <div className="github">
        <a
          href="https://github.com/LisaMure/weather-app"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Open-source code{" "}
        </a>
        by Melisa Mureriwa
      </div>
    </div>
  );
}
