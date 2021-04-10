import React from "react";
import "./Banner.scss";
import banner from "./banner.jpeg";
function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="macron banner"/>
    </div>
  )
}

export default Banner;
