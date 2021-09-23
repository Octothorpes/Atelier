import React from 'react';
import './Reviews.css';
import ReviewsCountDropdown from './ReviewsCountDropdown.jsx';

import ReviewsTiles from './ReviewsTiles.jsx';


class Reviews extends React.Component {
  render() {
    const reviews = this.props.reviews;

    return (
      <React.Fragment>
        <ReviewsCountDropdown reviews={this.props.reviews} reviewsMeta={this.props.reviewsMeta}/>

        <div id="reviewOverviewBox">
          <ReviewsTiles
            reviews={this.props.reviews}
            reviewsMeta={this.props.reviewsMeta}
            starGenerator={this.props.starGenerator}
            formatBody={this.props.formatBody}
            productName={this.props.productName}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Reviews;