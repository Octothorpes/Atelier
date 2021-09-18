import React from 'react';
import './Reviews.css';
import ReviewsCountDropdown from './ReviewsCountDropdown.jsx';
// import ReviewsRateDate from './ReviewsRateDate.jsx';
// import ReviewsHeader from './ReviewsHeader.jsx';
// import ReviewsTitle from './ReviewsTitle.jsx';
// import ReviewsSummary from './ReviewsSummary.jsx';
// import ReviewsRecommend from './ReviewsRecommend.jsx';
// import ReviewsResponse from './ReviewsResponse.jsx';
// import ReviewsPhotos from './ReviewsPhotos.jsx';
// import ReviewsFooter from './ReviewsFooter.jsx';
import ReviewsButtons from './ReviewsButtons.jsx';

import ReviewsTiles from './ReviewsTiles.jsx';


class Reviews extends React.Component {
  render() {
    const reviews = this.props.reviews;

    return (
      <React.Fragment>
        <ReviewsCountDropdown reviews={this.props.reviews}/>
        {/* <ReviewsRateDate reviews={this.props.reviews}/> */}
        {/* <ReviewsHeader reviews={this.props.reviews}/> */}
        {/* <ReviewsTitle reviews={this.props.reviews}/> */}
        {/* <ReviewsSummary reviews={this.props.reviews}/> */}
        {/* <ReviewsRecommend reviews={this.props.reviews}/> */}
        {/* <ReviewsResponse reviews={this.props.reviews}/> */}
        {/* <ReviewsPhotos reviews={this.props.reviews}/> */}
        {/* <ReviewsFooter reviews={this.props.reviews}/> */}
        <ReviewsButtons reviews={this.props.reviews}/>


        <div id="reviewOverviewBox"><ReviewsTiles reviews={this.props.reviews}/></div>
      </React.Fragment>
    );
  }
}

export default Reviews;