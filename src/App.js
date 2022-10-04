import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Zurich" />
      <footer className="source">
        Coded by Alina Pysmenna, open-source code on
        <a
          href="https://github.com/User-Alina-name/weather-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          _GitHub_
        </a>
        and hosted on
        <a
          href="https://react-weather-by-pysmenna-alina.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          _Netlify_
        </a>
      </footer>
    </div>
  );
}

export default App;
