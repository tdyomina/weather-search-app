import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WindIcon from "./WindIcon";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-4">
          <div className="d-flex">
            <div>
              <WeatherIcon icon_url={props.data.icon_url} />
            </div>
            <div className="main-temp">
              <WeatherTemperature celsius={props.data.temp} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <WindIcon
            style={{
              transform: `rotate(${props.data.wind_degree}deg)`,
            }}
            code={props.data.wind}
            size={52}
          />
        </div>
      </div>
    </div>
  );
}
