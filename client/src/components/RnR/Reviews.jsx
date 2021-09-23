import React from 'react';
import './Reviews.css';
import ReviewsCountDropdown from './ReviewsCountDropdown.jsx';
// import ReviewsButtons from './ReviewsButtons.jsx';

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

        {/* <ReviewsButtons reviews={this.props.reviews}/> */}
      </React.Fragment>
    );
  }
}

export default Reviews;