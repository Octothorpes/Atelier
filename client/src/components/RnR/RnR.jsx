import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import './RnR.css';
import axios from 'axios';



class RnR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      reviewsMeta: this.props.reviewsMeta,
      productRating: this.props.productRating,
      productStars: this.props.productStars,
      sortStarClick: []
    };

    this.sortStarClick = this.sortStarClick.bind(this);
  }

  // componentDidMount() {
  //   let example = 47425;
  //   let getReviews = this.props.formatBody('GET', '/reviews', {
  //     'product_id': `${example}`
  //   });

  //   let getReviewsMeta = this.props.formatBody('GET', '/reviews/meta', {
  //     'product_id': `${example}`
  //   });

  //   axios
  //     .post('/api/*', getReviews)
  //     .then((results) => {
  //       this.setState({ reviews: results.data });

  //       axios
  //         .post('/api/*', getReviewsMeta)
  //         .then((results2) => {
  //           this.setState({ reviewsMeta: results2.data });

  //           let totalReviewCount = this.state.reviews.count;
  //           const starRatingObj = this.state.reviewsMeta.ratings;
  //           let starRating = 0; let vals = 0;
  //           if (starRatingObj) {
  //             vals = Object.values(starRatingObj);
  //             if (vals.length) {
  //               vals = vals.reduce((prev, cur) => (Number(prev) + Number(cur)));
  //               for (let key in starRatingObj) {
  //                 starRating += Number(key) * Number(starRatingObj[key]);
  //               }
  //             }
  //           }
  //           const starRatingGenerator = this.props.starGenerator(starRating / vals);
  //           starRating = Math.round(starRating / vals * 10) / 10;

  //           this.setState({
  //             productRating: starRating,
  //             productStars: starRatingGenerator
  //           });
  //         })
  //         .catch((err) => { console.log('error', err); });
  //     })
  //     .catch((err) => { console.log('error', err); });
  // }

  sortStarClick(e, starNum) {
    let newArr = this.state.sortStarClick;
    if (!newArr.includes(starNum)) {
      newArr.push(starNum);
      this.setState({ sortStarClick: newArr });
    } else {
      let newArr2 = [];
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== starNum) {
          newArr2.push(newArr[i]);
        }
      }
      this.setState({ sortStarClick: newArr2 });
    }
  }


  render() {
    console.log('RnR this.state:', this.state);
    // console.log(this.props);

    return (
      <>
        <h4 id="RnRtitle">RATINGS & REVIEWS</h4>
        <div id="box">
          <div id="ratingsComp">
            <Ratings
              ratings={this.state.meta}
              productRating={this.state.productRating}
              productStars={this.state.productStars}
              starGenerator={this.props.starGenerator}
              reviewsMeta={this.state.reviewsMeta}
              reviews={this.state.reviews}
              formatBody={this.props.formatBody}
              sortStarClick={this.sortStarClick}
            />
          </div>
          <div id="reviewsComp">
            <Reviews
              reviews={this.state.reviews}
              reviewsMeta={this.state.reviewsMeta}
              starGenerator={this.props.starGenerator}
              formatBody={this.props.formatBody}
              productName={this.props.productName}
              sortStarClick={this.state.sortStarClick}
            />
          </div>
        </div>
      </>
    );
  }
}

export default RnR;