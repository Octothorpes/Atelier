import React from 'react';
import './Ratings.css';
import RatingsBarChart from './RatingsBarChart.jsx';
import RatingsArrowCharts from './RatingsArrowCharts.jsx';
import EmptyStar from '../svgImages/EmptyStar.svg';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productRating: this.props.productRating,
      productStars: this.props.productStars
    };

    this.productRecommend = this.productRecommend.bind(this);
  }

  productRecommend(reviews) {
    let recommends = 0;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].recommend) { recommends += 1; }
    }
    let percentageRecommended = recommends / reviews.length * 100;
    percentageRecommended = Math.round(percentageRecommended);
    if (percentageRecommended > 99) { percentageRecommended = 100; }
    return percentageRecommended;
  }


  render() {
    let reviewsCount = this.props.reviewsMeta.ratings;
    let reviewsTotal = Object.values(reviewsCount);
    if (reviewsTotal.length) {
      reviewsCount = reviewsTotal.reduce((prev, cur) => Number(prev) + Number(cur));
    } else { reviewsCount = 0; }

    let {productStars} = this.props;
    let totalRecommends = this.props.reviewsMeta.recommended.true;
    let percentReviewsRecommend = Math.round(totalRecommends / reviewsCount * 100);
    if (percentReviewsRecommend > 99) { percentReviewsRecommend = 100; }

    let productRating = this.props.productRating;
    if (productRating === 1) { productRating = '1.0'; }
    if (productRating === 2) { productRating = '2.0'; }
    if (productRating === 3) { productRating = '3.0'; }
    if (productRating === 4) { productRating = '4.0'; }
    if (productRating === 5) { productRating = '5.0'; }


    return (
      <>
        <div id="ratingOverviews">
          <div id="ratingOverviewNumber">{productRating || 0.0}</div>
          <div id="starDiv">
            <img src={productStars ? productStars[0] : EmptyStar} className="ratingOverviewStars" width="15" height="8" alt="Star 1"/>
            <img src={productStars ? productStars[1] : EmptyStar} className="ratingOverviewStars" width="15" height="8" alt="Star 2"/>
            <img src={productStars ? productStars[2] : EmptyStar} className="ratingOverviewStars" width="15" height="8" alt="Star 3"/>
            <img src={productStars ? productStars[3] : EmptyStar} className="ratingOverviewStars" width="15" height="8" alt="Star 4"/>
            <img src={productStars ? productStars[4] : EmptyStar} className="ratingOverviewStars" width="15" height="8" alt="Star 5"/>
          </div>
        </div>

        <div id="ratingBreakdown">
          Rating Breakdown:
        </div>

        <div id="percentRecommended">
          {/* <span id="percentReviews">{percentReviewsRecommend || 0}%</span> of reviews recommend this product */}
          <span id="percentReviews">{this.productRecommend(this.props.reviews.results) || 0}%</span> of reviews recommend this product
        </div>

        <div id="starBarChart">
          <RatingsBarChart
            reviews={this.props.reviews}
            reviewsMeta={this.props.reviewsMeta}
            sortStarClick={this.props.sortStarClick}
            starsSelected={this.props.starsSelected}
            productAverageRating={this.props.productAverageRating}
          />
        </div>

        <div id="arrowCharts">
          <RatingsArrowCharts
            reviewsMeta={this.props.reviewsMeta.characteristics}
            reviews={this.props.reviews}
          />
        </div>
      </>
    );
  }
}

export default Ratings;