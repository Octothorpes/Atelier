import React from 'react';
import axios from 'axios';
import './Reviews.css';

class ReviewsFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedYes: false,
      yes: this.props.helpful,
      clickedReport: false
    };

    this.yesHandler = this.yesHandler.bind(this);
    this.reportHandler = this.reportHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.helpful !== this.props.helpful) {
      this.setState({ yes: this.props.helpful });
    }
  }

  yesHandler() {
    if (this.state.clickedYes) { return; }
    this.setState({
      yes: this.props.helpful + 1,
      clickedYes: true
    });

    // const {formatBody} = this.props;
    // const {reviewID} = this.props;
    // const body = formatBody('PUT', `/reviews/${reviewID}/helpful`);
    // axios.post('/api/*', body)
    //   .then((results) => { console.log('Successful PUT Helpful'); })
    //   .catch((err) => {
    //     console.log('Error while updating the review helpfulness');
    //   });
  }

  reportHandler() {
    if (this.state.clickedReport) { return; }
    this.setState({ clickedReport: true });

    console.log(this.props.reviewID);
    // const {formatBody} = this.props;
    // const {reviewID} = this.props;
    // const body = formatBody('PUT', `/reviews/${reviewID}/report`);
    // axios.post('/api/*', body)
    //   .then((results) => { console.log('Successful PUT Report'); })
    //   .catch((err) => {
    //     console.log('Error while updating the review report');
    //   });
  }


  render() {
    let {helpful} = this.props;

    return (
      <React.Fragment>
        <span>Helpful?</span>
        <span>
          {/* <span className="yes" onClick={this.yesHandler}>Yes</span>
          <span> ({this.state.yes})</span> */}
          <span className="yes" onClick={this.yesHandler}>Yes</span>
          <span> ({this.state.clickedYes ? helpful + 1 : helpful})</span>
        </span>
        <span id="break"></span>
        {/* <span className="report" onClick={this.reportHandler}>{this.state.clickedReport ? 'Reported' : 'Report'}</span> */}
        <span className="report" onClick={this.reportHandler}>{this.state.clickedReport ? 'Reported' : 'Report'}</span>
      </React.Fragment>
    );
  }
}


export default ReviewsFooter;