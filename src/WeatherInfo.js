import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="main-text mt-3">{props.data.city}</h1>
      <div className="namedDay">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="icon">
              <WeatherIcon
                code={props.data.icon}
                size={54}
                color="rgb(70, 70, 70)"
              />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
