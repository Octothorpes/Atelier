import React from 'react';
import './Ratings.css';

let RatingsFit = function(props) {
  let arrow = '▼';
  let charSize = props.fit;

  if (charSize) {
    return (
      <React.Fragment>
        <div id="fitChart">
          Fit
          <div className="plot">
            <div className="plotBar">
              <div className="plotBar2">{charSize === 1.0 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 1.5 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 2.0 ? arrow : null}</div>
            </div>
            <div className="plotBar">
              <div className="plotBar2">{charSize === 2.5 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 3.0 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 3.5 ? arrow : null}</div>
            </div>
            <div className="plotBar">
              <div className="plotBar2">{charSize === 4.0 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 4.5 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 5.0 ? arrow : null}</div>
            </div>
          </div>
          <div id="fitChars">
            <span className="arrowChart arrowRating1">Runs Tight</span>
            <span className="arrowChart arrowRating2">Perfect</span>
            <span className="arrowChart arrowRating3">Runs Long</span>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <>
      </>
    );
  }
};

export default RatingsFit;