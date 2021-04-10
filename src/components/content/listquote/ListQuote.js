import React from "react";
import "./ListQuote.scss";
import Quote from "./quote/Quote";
function ListQuote() {
  return (
    <div className="display-quote">
      <div className="scroll">
        <Quote/>
        <Quote/>
        <Quote/>
        <Quote/>
        <Quote/>
      </div>
    </div>
  )
}

export default ListQuote
