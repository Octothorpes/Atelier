import React from 'react';
import './Reviews.css';
import ReviewsRateDate from './ReviewsRateDate.jsx';
import ReviewsBody from './ReviewsBody.jsx';
import ReviewsResponse from './ReviewsResponse.jsx';
import ReviewsPhotos from './ReviewsPhotos.jsx';
import ReviewsFooter from './ReviewsFooter.jsx';
import ReviewsButtons from './ReviewsButtons.jsx';


class ReviewsTiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewDisplay: 2,
      sortStarClick: this.props.sortStarClick
    };

    this.updateReviewDisplay = this.updateReviewDisplay.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sortStarClick !== this.props.sortStarClick) {
      this.setState({ sortStarClick: this.props.sortStarClick });
    }
  }

  updateReviewDisplay() {
    this.setState({ reviewDisplay: this.state.reviewDisplay + 2 });
  }

  sortReviews(catObj, reviews) {
    for (let key in catObj) {
      if (catObj[key] && key === 'Relevant') {
        // sorts by date first and then helpfulness second
        let date = reviews.sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          } else if (a.date < b.date) {
            return 1;
          }
          return 0;
        });
        return this.filterReviews(date.sort((a, b) => {
          if (a.helpfulness > b.helpfulness) {
            return -1;
          } else if (a.helpfulness < b.helpfulness) {
            return 1;
          }
          return 0;
        }));
      } else if (catObj[key] && key === 'Helpful') {
        return this.filterReviews(reviews.sort((a, b) => {
          if (a.helpfulness > b.helpfulness) {
            return -1;
          } else if (a.helpfulness < b.helpfulness) {
            return 1;
          }
          return 0;
        }));
      } else if (catObj[key] && key === 'Newest') {
        return this.filterReviews(reviews.sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          } else if (a.date < b.date) {
            return 1;
          }
          return 0;
        }));
      }
    }
  }

  filterReviews(reviews) {
    if (this.state.sortStarClick.length === 0) { return reviews; }
    let newReviewArr = [];
    for (let i = 0; i < reviews.length; i++) {
      if (this.state.sortStarClick.includes(reviews[i].rating)) {
        newReviewArr.push(reviews[i]);
      }
    }
    return newReviewArr;
  }



  render() {
    const starFilter = this.state.sortStarClick;
    const reviews = this.props.reviews;
    const dropdownFilter = this.props.dropdownFilter;
    let summary, reviewCount;

    let sortedReviews = this.sortReviews(dropdownFilter, reviews.results);

    summary = sortedReviews.map((item, index) => {
      if (starFilter.includes(item.rating) || starFilter.length === 0) {
        if (index > this.state.reviewDisplay - 1) { return; }
        reviewCount = sortedReviews.length;

        return (
          <div className="individualReviewBox" key={index}>
            <div id="starsUsernameDate" className="tileBody">
              <ReviewsRateDate
                stars={item.rating}
                username={item.reviewer_name}
                date={item.date}
                starGenerator={this.props.starGenerator}
              />
            </div>

            <div id="summaryHelpfulAndReport">
              <p id="summaryTitle" className="tileBody">
                {item.summary}
              </p>

              <div id="summaryBody" className="tileBody">
                <ReviewsBody body={item.body}/>
              </div>

              <p id="trueRecommend" className="tileBody">
                {item.recommend ? '✓ I recommend this product' : null}
              </p>

              <ReviewsResponse response={item.response}/>

              <div className="tileBody">
                <ReviewsPhotos photos={item.photos}/>
              </div>

              <div id="helpfulAndReport">
                <ReviewsFooter
                  reviewID={item.review_id}
                  helpful={item.helpfulness}
                  formatBody={this.props.formatBody}
                />
              </div>
            </div>
          </div>
        );
      }
    });

    return (
      <React.Fragment>
        <div id="reviewOverviewBox">
          {summary}
        </div>

        <ReviewsButtons
          state={this.state.reviewDisplay}
          reviewCount={reviewCount}
          reviews={this.props.reviews}
          reviewDisplay={this.updateReviewDisplay}
          reviewsMeta={this.props.reviewsMeta}
          productName={this.props.productName}
          formatBody={this.props.formatBody}
          productAverageRating={this.props.productAverageRating}
        />
      </React.Fragment>
    );
  }
}

export default ReviewsTiles;