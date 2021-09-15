import React from 'react';
import './Reviews.css';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }


  render() {
    return (
      <>
        <h4 id="reviewCountHeading">**248** reviews, sorted by **relevance**</h4>
        <div id="reviewOverviewBox">
          <div className="individualReviewBox">Review Overview 1</div>
          <div className="individualReviewBox">Review Overview 2</div>
        </div>
        <div className="reviewButtons">
          <button id="moreReviewsButton">MORE REVIEWS</button>
          <button id="addReviewButton">ADD A REVIEW +</button>
        </div>
      </>
    );
  }
}

export default Reviews;