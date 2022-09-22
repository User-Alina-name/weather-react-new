import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Zurich",
    temperature: 27,
    data: "Friday 17:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 78,
    wind: 2,
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="content">
          <h1 className="main-text" id="cityName">
            {weatherData.city}{" "}
          </h1>
          <div className="form">
            <form className="search-city">
              <label for="search"></label>
              <br />
              <input
                className="search-width"
                type="text"
                id="search"
                placeholder="Search city..."
              />
              <input className="lupa" type="submit" value="🔎" />
            </form>
          </div>
          <div id="square">
            <span className="namedDay">{weatherData.data}</span>
            <h4 className="today">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.cloudy}
                className="icon"
              ></img>
              <strong className="deg degrees"></strong>
              <span className="units"></span>
              <button href="#" id="celcius">
                {weatherData.temperature} °C
              </button>
              |<button id="fahrenheit">°F</button>
              <div className="unit cloudy"></div>
              wind:
              <span className="unit windSpeed"> {weatherData.wind}</span>
              <br />
              humidity:
              <span className="unit humidity"> {weatherData.humidity}</span>
            </h4>
            <div className="forecast"></div>
          </div>
        </div>
      </div>
      <footer className="source">
        <a href="https://github.com/User-Alina-name/weather-project">
          Open-source code
        </a>
        (by Alina Pysmenna)
      </footer>
    </div>
  );
}
