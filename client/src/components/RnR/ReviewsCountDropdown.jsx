import React from 'react';
import './Reviews.css';

class ReviewsCountDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  render() {
    let reviewsCount = this.props.reviewsMeta.ratings;
    let reviewsTotal = Object.values(reviewsCount);
    if (reviewsTotal.length) {
      reviewsCount = reviewsTotal.reduce((prev, cur) => Number(prev) + Number(cur));
    } else { reviewsCount = 0; }

    return (
      <React.Fragment>
        <div id="reviewCountHeading">
          {reviewsCount} reviews, Sort On
          <select id="dropdown" onChange={this.props.sortOnHandler}>
            <option value="Relevant">Relevant</option>
            <option value="Helpful">Helpful</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default ReviewsCountDropdown;