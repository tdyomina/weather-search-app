import React from "react";

export default function WeatherIcon(props) {
  let pic = props.icon_url;
  return <img src={pic} alt="How to use SheCodes API icons?" />;
}
