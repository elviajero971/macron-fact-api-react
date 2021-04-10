import React from 'react'
import "./Content.scss";
import Banner from "./banner/Banner";
import ListQuote from "./listquote/ListQuote";
function Content() {
  return (
    <div className="content">
      <div className="scroll">
        <Banner/>
        <ListQuote/>
      </div>
    </div>
  )
}

export default Content
