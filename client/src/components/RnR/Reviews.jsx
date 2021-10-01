import React from 'react';
import './Reviews.css';
import ReviewsCountDropdown from './ReviewsCountDropdown.jsx';
import ReviewsTiles from './ReviewsTiles.jsx';
import HOC from '../HOC/withInteractionApi.jsx';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Relevant: true,
      Helpful: false,
      Newest: false
    };

    this.sortOnHandler = this.sortOnHandler.bind(this);
  }

  sortOnHandler(e) {
    let topic = e.target.value;
    let obj = {};
    for (let key in this.state) {
      if (key === topic) {
        obj[topic] = true;
        this.setState( obj );
      } else {
        obj[key] = false;
        this.setState( obj );
      }
    }
    this.props.sendInteraction('Sort Options');
  }

  render() {
    const reviews = this.props.reviews;

    return (
      <React.Fragment>
        <ReviewsCountDropdown
          reviews={this.props.reviews}
          reviewsMeta={this.props.reviewsMeta}
          sortOnHandler={this.sortOnHandler}
        />

        <ReviewsTiles
          reviews={this.props.reviews}
          reviewsMeta={this.props.reviewsMeta}
          starGenerator={this.props.starGenerator}
          formatBody={this.props.formatBody}
          productName={this.props.productName}
          dropdownFilter={this.state}
          sortStarClick={this.props.sortStarClick}
          productAverageRating={this.props.productAverageRating}
        />
      </React.Fragment>
    );
  }
}

export default HOC(Reviews, 'Ratings & Reviews');