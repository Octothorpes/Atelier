import React from 'react';
import './Reviews.css';

class ReviewsFooter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     helpful: this.props.helpful
  //   };
  // }


  render() {
    let {helpful} = this.props;

    return (
      <React.Fragment>
        <span>Helpful?</span>
        <span>
          <span className="yes">Yes</span>
          ({helpful})
        </span>
        <span id="break"></span>
        <span className="report">Report</span>
      </React.Fragment>
    );
  }
}


export default ReviewsFooter;