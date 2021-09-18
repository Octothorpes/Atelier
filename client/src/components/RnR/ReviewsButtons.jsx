import React from 'react';
import './Reviews.css';

class ReviewsButtons extends React.Component {
  render() {

    return (
      <React.Fragment>
        <div className="reviewButtons">
          <button id="moreReviewsButton">MORE REVIEWS</button>
          <button id="addReviewButton">ADD A REVIEW +</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ReviewsButtons;