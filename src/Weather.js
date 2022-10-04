import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Wednesday 07:00",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="content">
            <h1 className="main-text" id="cityName">
              {weatherData.city}{" "}
            </h1>
            <form className="search-city">
              <input
                className="search-width"
                type="text"
                id="search"
                placeholder="Search city..."
              />
              <input className="lupa" type="submit" value="🔎" />
            </form>
            <div id="square">
              <span className="namedDay">{weatherData.data}</span>
              <h4 className="today">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="icon"
                ></img>
                <strong className="deg degrees"></strong>
                <span className="units"></span>
                <button href="#" id="celcius">
                  {Math.round(weatherData.temperature)} °C
                </button>
                |<button id="fahrenheit">°F</button>
                <div className="unit cloudy"></div>
                wind:
                <span className="unit windSpeed">
                  {" "}
                  {Math.round(weatherData.wind)}
                </span>
                <br />
                humidity:
                <span className="unit humidity"> {weatherData.humidity}</span>
              </h4>
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
  } else {
    const apiKey = `6e6ec494746b5229a9f2d526478c924c`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
