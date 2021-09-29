import React from 'react';
import './Reviews.css';
import HOC from '../HOC/withInteractionApi.jsx';

class ReviewsBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };

  }



  render() {
    let bodyLength = this.props.body.length;
    let bodyCut = this.props.body.slice(0, 250);

    if (bodyLength < 250 || this.state.showMore) {
      return (
        <React.Fragment>
          {this.props.body}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {bodyCut} ...
          <span id="showMoreButton"
            onClick={() => {
              this.setState({ showMore: true });
              this.props.sendInteraction('Reviews List');
            }}
          >
            Show more...
          </span>
        </React.Fragment>
      );
    }

  }
}


export default HOC(ReviewsBody, 'Ratings & Reviews');