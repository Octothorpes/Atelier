import React from 'react';
import '../../Ratings.css';
import HOC from '../../../HOC/withInteractionApi.jsx';

class ModalReviewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charRemaining: 50,
      counterReading: 'Minimum required characters left: ',
      count: 0
    };

    this.charCount = this.charCount.bind(this);
  }

  charCount(e) {
    let currentBody = e.target.value.length;
    this.setState({ charRemaining: 50 - currentBody, count: currentBody });
    if (currentBody >= 50) {
      this.setState({ counterReading: 'Minimum reached' });
    } else {
      this.setState({ counterReading: 'Minimum required characters left: ' });
    }

    this.props.onChangeHandler('body', e.target.value);
  }


  render() {


    return (
      <React.Fragment>
        <textarea cols="60" rows="5" minLength="50" maxLength="1000"
          onClick={() => this.props.sendInteraction('Write New Review')}
          placeholder="Why did you like the product or not?" onChange={this.charCount} required>
        </textarea>
        <br></br>

        <i>
          {this.state.counterReading}
          {this.state.count >= 50 ? null : this.state.charRemaining}
        </i>
      </React.Fragment>
    );
  }
}

export default HOC(ModalReviewBody, 'Reviews & Ratings');