import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import './RnR.css';
import axios from 'axios';



class RnR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: '',
      meta: ''
    };
  }

  componentDidMount() {
    let getReviews = this.props.formatBody('GET', '/reviews', {
      'product_id': `${this.props.productID}`
    });

    let getReviewsMeta = this.props.formatBody('GET', '/reviews/meta', {
      'product_id': `${this.props.productID}`
    });

    axios
      .post('/api/*', getReviews)
      .then((results) => {
        this.setState({ reviews: results.data });

        axios
          .post('/api/*', getReviewsMeta)
          .then((results2) => { this.setState({ meta: results2.data }); })
          .catch((err) => { console.log('error', err); });
      })
      .catch((err) => { console.log('error', err); });
  }


  render() {
    console.log('RnR this.state:', this.state);

    return (
      <>
        <h4 id="RnRtitle">RATINGS & REVIEWS</h4>
        <div id="box">
          <div id="ratingsComp">
            <Ratings ratings={this.state.meta}/>
          </div>
          <div id="reviewsComp">
            <Reviews reviews={this.state.reviews}/>
          </div>
        </div>
      </>
    );
  }
}

export default RnR;