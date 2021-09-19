import React from 'react';
import axios from 'axios';
import './Reviews.css';

class ReviewsFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: this.props.helpful,
      clickedYes: false,
      yes: this.props.helpful,
      report: 'Report'
    };

    this.yesHandler = this.yesHandler.bind(this);
    this.reportHandler = this.reportHandler.bind(this);
  }

  yesHandler() {
    if (this.state.clickedYes) { return; }
    this.setState({
      yes: this.state.yes + 1,
      clickedYes: true
    });

    const {formatBody} = this.props;
    const {reviewID} = this.props;
    const body = formatBody('PUT', `/reviews/${reviewID}/helpful`);
    axios.post('/api/*', body)
      .then((results) => { console.log('Successful'); })
      .catch((err) => {
        console.log('Error while updating the review helpfulness');
      });
  }

  reportHandler() { this.setState({ report: 'Reported' }); }


  render() {
    let {helpful} = this.props;

    return (
      <React.Fragment>
        <span>Helpful?</span>
        <span>
          <span className="yes" onClick={this.yesHandler}>Yes</span>
          <span>({this.state.yes})</span>
        </span>
        <span id="break"></span>
        <span className="report" onClick={this.reportHandler}>{this.state.report}</span>
      </React.Fragment>
    );
  }
}


export default ReviewsFooter;