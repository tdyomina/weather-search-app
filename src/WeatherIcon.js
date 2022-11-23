import React from "react";

export default function WeatherIcon(props) {
  let pic = props.icon_url;
  return <img src={pic} alt="SheCodes API icons" />;
}
