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
