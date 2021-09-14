import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import './RnR.css';
import axios from 'axios';


class RnR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    let body = this.props.formatBody(
      'GET',
      '/reviews',
      {'product_id': `${this.props.productID}`}
    );

    axios
      .post('/api/*', body)
      .then((results) => {
        this.setState({ data: results.data });
      })
      .catch((err) => {
        console.log('error', err);
      });
  }


  render() {
    console.log('RnR this.state:', this.state.data);

    return (
      <>
        <h4>RATINGS & REVIEWS</h4>
        <div id="box">
          <div id="ratingsComp">
            <Ratings />
          </div>
          <div id="reviewsComp">
            <Reviews />
          </div>
        </div>
      </>
    );
  }
}

export default RnR;