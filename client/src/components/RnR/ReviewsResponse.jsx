import React from 'react';
import './Reviews.css';

let ReviewsResponse = function(props) {
  if (props.response) {
    return (
      <React.Fragment>
        <div id="responseContainer" className="tileBody">
          <p id="trueResponse1">{props.response ? 'Response from seller:' : null}</p>
          <p id="trueResponse2">
            {props.response ? props.response : null}
          </p>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div></div>
      </React.Fragment>
    );
  }
};

export default ReviewsResponse;