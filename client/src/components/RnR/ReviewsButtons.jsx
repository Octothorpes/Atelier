import React from 'react';
import './Reviews.css';

class ReviewsButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };

    this.clickHandler1 = this.clickHandler1.bind(this);
  }

  clickHandler1() {
    this.props.reviewDisplay();
  }

  render() {
    if (this.props.state >= this.props.reviewCount) {
      return (
        <React.Fragment>
          <div className="reviewButtons">
            <button id="addReviewButton">ADD A REVIEW +</button>
          </div>
        </React.Fragment>
      );
    } else if (!this.props.reviewCount) {
      return (
        <React.Fragment>
          <div className="reviewButtons">
            <button id="addReviewButton">ADD A REVIEW +</button>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="reviewButtons">
            <button id="moreReviewsButton" onClick={this.clickHandler1}>MORE REVIEWS</button>
            <button id="addReviewButton">ADD A REVIEW +</button>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ReviewsButtons;