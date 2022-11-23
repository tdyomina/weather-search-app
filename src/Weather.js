import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      wind_degree: response.data.wind.degree,
      city: response.data.city,
      icon_url: response.data.condition.icon_url,
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "0350f7badbab6a73b1c13co44tfd8c6a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a City"
                aria-label="Enter a City"
                autoFocus="on"
                aria-describedby="basic-addon2"
                onChange={handleCityChange}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>

        <h2 className="h2 p-4">{weatherData.city}</h2>
        <div className="row">
          <div className="col-s-6">
            <WeatherDetails data={weatherData} />
          </div>
        </div>
        <div className="text-center">
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div>
        <h2>Loading, please wait.</h2>
      </div>
    );
  }
}
