import React from 'react';
import './Ratings.css';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }


  render() {
    // let {productStars} = this.props;
    let productStars = this.props.productStars;
    console.log(this.props);

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

        <div id="percentRecommended">
          100% of reviews recommend this product
        </div>

        <div id="starBarChart">
          <div className="starRatings">5 stars</div>
          <div className="starRatings">4 stars</div>
          <div className="starRatings">3 stars</div>
          <div className="starRatings">2 stars</div>
          <div className="starRatings">1 stars</div>
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