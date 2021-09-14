import React from 'react';
import './Reviews.css';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }


  render() {
    const reviews = this.props.reviews;
    console.log('----->', reviews);

    let date, summary, recommend, response;
    const starTile = {
      '0': '☆☆☆☆☆',
      '1': '★☆☆☆☆',
      '2': '★★☆☆☆',
      '3': '★★★☆☆',
      '4': '★★★★☆',
      '5': '★★★★★',
    };

    if (reviews.results) {
      summary = reviews.results.map((item) => {
        date = new Date(item.date.slice(0, 10));
        date = date.toString().slice(4, 15);

        if (item.recommend) { recommend = '✔ I recommend this product'; }
        if (item.response) { response = item.response; }

        return (
          <div className="individualReviewBox" key={item.summary}>
            <div id="starsUsernameDate">
              <p>{starTile[item.rating.toString()]}</p>
              <p id="usernameDate">{item.reviewer_name}, {date}</p>
            </div>
            <div id="summaryHelpfulAndReport">
              <p id="summaryTitle">{item.summary}</p>
              <p id="summaryBody">{item.body}</p>
              <p id="trueRecommend">{recommend}</p>
              <p id="trueResponse">{'Response:', response}</p>
              <div id="helpfulAndReport">
                <span>Helpful?</span>
                <span><span className="yesAndReport">Yes</span> ({item.helpfulness})</span>
                <span id="report" className="yesAndReport">Report</span>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <>
        <h4 id="reviewCountHeading">{reviews.count} reviews, sorted by **relevance**</h4>
        <div id="reviewOverviewBox">
          {summary}
        </div>
        <div className="reviewButtons">
          <button id="moreReviewsButton">MORE REVIEWS</button>
          <button id="addReviewButton">ADD A REVIEW +</button>
        </div>
      </>
    );
  }
}

export default Reviews;