import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Search weather by the City</h1>
          <Weather defaultCity="Riga" />
        </header>
        <footer>
          This page was coded by{" "}
          <a
            href="https://stellular-beijinho-c2bad9.netlify.app/about.html"
            target="_blank"
            title="Tatiana's personal page"
            rel="noreferrer"
          >
            Tatiana
          </a>
          , welcome to{" "}
          <a
            href="https://github.com/tdyomina/sheCodes/tree/main/react-weather-forecast"
            target="_blank"
            title="GitHub link"
            rel="noreferrer"
          >
            My Git.
          </a>
        </footer>
      </div>
    </div>
  );
}
