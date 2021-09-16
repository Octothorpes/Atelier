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
    // console.log('----->', reviews);

    let date, summary, recommend, response;
    const starAndMonthTile = {
      '0': '☆☆☆☆☆', 'Jan': 'January', 'Jul': 'July',
      '1': '★☆☆☆☆', 'Feb': 'February', 'Aug': 'August',
      '2': '★★☆☆☆', 'Mar': 'March', 'Sep': 'September',
      '3': '★★★☆☆', 'Apr': 'April', 'Oct': 'October',
      '4': '★★★★☆', 'May': 'May', 'Nov': 'November',
      '5': '★★★★★', 'Jun': 'June', 'Dec': 'December'
    };

    if (reviews.results) {
      summary = reviews.results.map((item) => {
        date = new Date(item.date.slice(0, 10));
        date = date.toString().slice(4, 15);
        date = `${starAndMonthTile[date.slice(0, 3)]} ${date.slice(4, 6)}, ${date.slice(-4)}`;

        if (item.recommend) { recommend = '✔ I recommend this product'; }
        if (item.response) { response = item.response; }

        return (
          <div className="individualReviewBox" key={item.summary}>
            <div id="starsUsernameDate">
              <p>{starAndMonthTile[item.rating.toString()]}</p>
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