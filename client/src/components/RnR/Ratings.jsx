import React from 'react';
import './Ratings.css';
import RatingsBarChart from './RatingsBarChart.jsx';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }


  render() {
    let {productStars} = this.props;
    let totalReviewsCount = this.props.reviews.count;
    let totalRecommends = this.props.reviewsMeta.recommended.true;
    let percentReviewsRecommend = Math.round(totalRecommends / totalReviewsCount * 100);
    if (percentReviewsRecommend > 99) { percentReviewsRecommend = 100; }

    return (
      <>
        <div id="ratingOverviews">
          <div id="ratingOverviewNumber">{this.props.productRating}</div>
          <div id="starDiv">
            <img src={productStars ? productStars[0] : null} className="ratingOverviewStars"/>
            <img src={productStars ? productStars[1] : null} className="ratingOverviewStars"/>
            <img src={productStars ? productStars[2] : null} className="ratingOverviewStars"/>
            <img src={productStars ? productStars[3] : null} className="ratingOverviewStars"/>
            <img src={productStars ? productStars[4] : null} className="ratingOverviewStars"/>
          </div>
        </div>

        <div id="ratingBreakdown">
          Rating Breakdown:
        </div>

        <div id="percentRecommended">
          <span id="percentReviews">{percentReviewsRecommend}%</span> of reviews recommend this product
        </div>

        <div id="starBarChart">
          <RatingsBarChart reviewsMeta={this.props.reviewsMeta}/>
        </div>

        <div id="arrowCharts">
          <div id="sizeChart">
            Size
            <br></br>
            (horizontal SIZE arrow chart placed here)
          </div>

          <div id="comfortChart">
            Comfort
            <br></br>
            (horizontal COMFORT arrow chart placed here)
          </div>
        </div>
      </>
    );
  }
}

export default Ratings;