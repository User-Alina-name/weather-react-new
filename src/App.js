import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Zurich" />
      <footer className="source">
        <div>
          Coded by{" "}
          <a
            href="mailto:pismenna.alina18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alina Pysmenna
          </a>
          , open-source code on{" "}
          <a
            href="https://github.com/User-Alina-name/weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://react-weather-by-pysmenna-alina.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
