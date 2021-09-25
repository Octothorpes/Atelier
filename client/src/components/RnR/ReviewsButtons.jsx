import React from 'react';
import './Reviews.css';
import HOC from '../HOC/withInteractionApi.jsx';
import AddReviewModal from './modals/AddReviewModal.jsx';

class ReviewsButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addReview: false
    };

    this.clickHandler1 = this.clickHandler1.bind(this);
    this.clickHandler2 = this.clickHandler2.bind(this);
  }

  clickHandler1() {
    this.props.sendInteraction('Reviews List');
    this.props.reviewDisplay();
  }

  clickHandler2() {
    this.props.sendInteraction('Reviews List');
    this.setState({ addReview: !this.state.addReview });
  }


  render() {
    let reviewsCount = this.props.reviewsMeta.ratings;
    let reviewsTotal = Object.values(reviewsCount);
    if (reviewsTotal.length) {
      reviewsCount = reviewsTotal.reduce((prev, cur) => Number(prev) + Number(cur));
    } else { reviewsTotal = 0; }

    if (!this.state.addReview) {
      if (this.props.state >= reviewsCount) {
        return (
          <React.Fragment>
            <div className="reviewButtons">
              <button id="addReviewButton" onClick={this.clickHandler2}>ADD A REVIEW +</button>
            </div>
          </React.Fragment>
        );
      } else if (!reviewsCount) {
        return (
          <React.Fragment>
            <div className="reviewButtons">
              <button id="addReviewButton" onClick={this.clickHandler2}>ADD A REVIEW +</button>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <div className="reviewButtons">
              <button id="moreReviewsButton" onClick={this.clickHandler1}>MORE REVIEWS</button>
              <button id="addReviewButton" onClick={this.clickHandler2}>ADD A REVIEW +</button>
            </div>
          </React.Fragment>
        );
      }
    } else {
      return (
        <React.Fragment>
          <AddReviewModal
            show={this.clickHandler2}
            productName={this.props.productName}
            reviewsMeta={this.props.reviewsMeta}
            formatBody={this.props.formatBody}
          />
        </React.Fragment>
      );
    }
  }
}

export default HOC(ReviewsButtons, 'Ratings & Reviews');
