import React from 'react';
import './Ratings.css';

let RatingsWidth = function(props) {
  let arrow = '▼';
  let charSize = props.width;

  if (charSize) {
    return (
      <React.Fragment>
        <div id="widthChart">
          Width
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
          <div id="widthChars">
            <span className="arrowChart">Narrow</span>
            <span className="arrowChart">Average</span>
            <span className="arrowChart">Too Wide</span>
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

export default RatingsWidth;