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
    return (
      <>
        <div id="ratingOverviews">
          <div id="ratingOverviewNumber">3.5</div>
          <div id="ratingOverviewStars">☆☆☆☆☆</div>
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