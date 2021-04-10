import React from "react";
import "./Quote.scss";
import image from "./quote-img.jpeg";
function Quote() {
  return (
    <div className="quote">
      <div className="img">
        <img src={image} alt="quote-img"/>
      </div>
      <div className="content-quote">
        <div className="quote-author">
          <i className="fas fa-user fa-2x"></i>
          <p className="quote-author-value">Jojo la Malice</p>
        </div>
        <div className="quote-text">
          <p className="quote-text-value">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam architecto ullam, aperiam animi rerum sed labore culpa corporis cumque vitae cum.
          </p> 
        </div>
        <div className="quote-date">
          <i className="far fa-clock fa-2x"></i>
          <p className="quote-date-value">22 Janvier 2019</p>
        </div>
      </div>
      </div>
  )
}

export default Quote;
