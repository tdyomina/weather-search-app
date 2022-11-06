import React from "react";
import direction from "./direction.png";
import "./DirectionIcon.css";

export default function WindIcon(props) {
  return (
    <div className="p-5">
      <img src={direction} className="windIcon" alt="Direction Icon" />
    </div>
  );
}
