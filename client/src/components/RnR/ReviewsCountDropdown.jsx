import React from 'react';
import './Reviews.css';

class ReviewsCountDropdown extends React.Component {
  render() {
    const reviews = this.props.reviews;

    return (
      <React.Fragment>
        <div id="reviewCountHeading">
          {reviews.count} reviews, Sort On
          <select id="dropdown">
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