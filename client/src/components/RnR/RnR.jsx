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
      reviewsMeta: this.props.reviewsMeta
    };
  }

  // componentDidMount() {
  //   let getReviews = this.props.formatBody('GET', '/reviews', {
  //     'product_id': `${47422}`
  //   });

  //   let getReviewsMeta = this.props.formatBody('GET', '/reviews/meta', {
  //     'product_id': `${47422}`
  //   });

  //   axios
  //     .post('/api/*', getReviews)
  //     .then((results) => {
  //       this.setState({ reviews: results.data });

  //       axios
  //         .post('/api/*', getReviewsMeta)
  //         .then((results2) => { this.setState({ reviewsMeta: results2.data }); })
  //         .catch((err) => { console.log('error', err); });
  //     })
  //     .catch((err) => { console.log('error', err); });
  // }


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
              productRating={this.props.productRating}
              productStars={this.props.productStars}
              starGenerator={this.props.starGenerator}
              reviewsMeta={this.props.reviewsMeta}
              reviews={this.props.reviews}
              formatBody={this.props.formatBody}
            />
          </div>
          <div id="reviewsComp">
            <Reviews
              reviews={this.state.reviews}
              reviewsMeta={this.state.reviewsMeta}
              starGenerator={this.props.starGenerator}
              formatBody={this.props.formatBody}
            />
          </div>
        </div>
      </>
    );
  }
}

export default RnR;