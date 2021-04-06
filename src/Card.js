import React from "react";

const Card = ({ name, releasedate, summary, rating }) => {
  return (
    <div className="card-wrapper">
      <div className="blank"></div>

      <div className="card">
        <div className="headings card-title" >
          {name}
        </div>
        <div className="new">
          <div>Release Date: {releasedate}</div>
          <p>[Summary] {summary}</p>
        </div>
      </div>

      <div className="circular">
        <div className="number">{rating}</div>
      </div>
    </div>
  );
};

export default Card;
