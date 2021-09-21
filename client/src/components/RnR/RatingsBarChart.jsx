import React from 'react';
import './Reviews.css';

class RatingsBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };

    this.starCheck = this.starCheck.bind(this);
  }

  starCheck(num, total) {
    if (Number(num) > 0) {
      return Number(num) / total * 100 + '%';
    } else {
      return 0;
    }
  }


  render() {
    let reviewsCount = this.props.reviewsMeta.ratings;
    let test = reviewsCount;
    let reviewsTotal = Object.values(reviewsCount);
    reviewsCount = reviewsTotal.reduce((prev, cur) => Number(prev) + Number(cur));
    let star5 = this.starCheck(test['5'], reviewsCount);
    let star4 = this.starCheck(test['4'], reviewsCount);
    let star3 = this.starCheck(test['3'], reviewsCount);
    let star2 = this.starCheck(test['2'], reviewsCount);
    let star1 = this.starCheck(test['1'], reviewsCount);

    return (
      <React.Fragment>
        <span className="starRatings">
          5 stars
          <div className="starBar">
            <div className="starBar5" style={{width: star5}}></div>
          </div>
          {test['5'] || 0}
        </span>

        <span className="starRatings">
          4 stars
          <div className="starBar">
            <div className="starBar4" style={{width: star4}}></div>
          </div>
          {test['4'] || 0}
        </span>

        <span className="starRatings">
          3 stars
          <div className="starBar">
            <div className="starBar3" style={{width: star3}}></div>
          </div>
          {test['3'] || 0}
        </span>

        <span className="starRatings">
          2 stars
          <div className="starBar">
            <div className="starBar2" style={{width: star2}}></div>
          </div>
          {test['2'] || 0}
        </span>

        <span className="starRatings">
          1 stars
          <div className="starBar">
            <div className="starBar1" style={{width: star1}}></div>
          </div>
          {test['1'] || 0}
        </span>
      </React.Fragment>
    );
  }
}


export default RatingsBarChart;