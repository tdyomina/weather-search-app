import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
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
    const apiKey = "a9437c2e53c3ece57f9ae4c5c0193488";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="raw">
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
                <button className="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>

        <h2>{weatherData.city}</h2>
        <div className="row">
          <div className="col-6">
            <WeatherDetails data={weatherData} />
          </div>
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
