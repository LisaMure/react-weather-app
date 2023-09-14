import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Harare" />;
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
