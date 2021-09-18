import React from 'react';
import './Reviews.css';
import ReviewsPhotos from './ReviewsPhotos.jsx';


class ReviewsTiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      starAndMonthTile: {
        '0': '☆☆☆☆☆', 'Jan': 'January', 'Jul': 'July',
        '1': '★☆☆☆☆', 'Feb': 'February', 'Aug': 'August',
        '2': '★★☆☆☆', 'Mar': 'March', 'Sep': 'September',
        '3': '★★★☆☆', 'Apr': 'April', 'Oct': 'October',
        '4': '★★★★☆', 'May': 'May', 'Nov': 'November',
        '5': '★★★★★', 'Jun': 'June', 'Dec': 'December'
      }
    };
  }


  render() {
    const reviews = this.props.reviews;

    let summary, date, recommend, response1, response2;

    if (reviews.results) {
      summary = reviews.results.map((item, index) => {
        if (index > 1) { return; }
        date = new Date(item.date.slice(0, 10));
        date = date.toString().slice(4, 15);
        date = `${this.state.starAndMonthTile[date.slice(0, 3)]} ${date.slice(4, 6)}, ${date.slice(-4)}`;

        if (item.recommend) { recommend = '✔ I recommend this product'; }
        if (item.response) {
          response1 = 'Response:';
          response2 = item.response;
        }

        return (
          <div className="individualReviewBox" key={item.summary}>
            <div id="starsUsernameDate" className="tileBody">
              <p>{this.state.starAndMonthTile[item.rating.toString()]}</p>
              <p id="usernameDate">{item.reviewer_name}, {date}</p>
            </div>

            <div id="summaryHelpfulAndReport">
              <p id="summaryTitle" className="tileBody">{item.summary}</p>
              <p id="summaryBody" className="tileBody">{item.body}</p>
              <p id="trueRecommend" className="tileBody">{recommend}</p>
              <p id="trueResponse1">{response1}</p>
              <p id="trueResponse2" className="tileBody">{response2}</p>

              <p className="tileBody">{item.photos.map((item) =>
                <img id="images" src={item.url} alt={item.id} key={item.id}/>
              )}</p>

              <div id="helpfulAndReport">
                <span>Helpful?</span>
                <span><span className="yes">Yes</span> ({item.helpfulness})</span>
                <span id="break"></span><span className="report">Report</span>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <React.Fragment>
        {summary}
      </React.Fragment>
    );
  }
}

export default ReviewsTiles;