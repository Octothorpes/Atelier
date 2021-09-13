import React from 'react';
import './RnR.css';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

class RnR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }


  render() {
    return (
      <>
        <h4>RATINGS & REVIEWS</h4>
        <div id="box">
          <div id="box1">
            <Ratings />
          </div>
          <div id="box2">
            <Reviews />
          </div>
        </div>
      </>
    );
  }
}

export default RnR;