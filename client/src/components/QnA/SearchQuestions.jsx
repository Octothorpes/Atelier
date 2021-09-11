import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './QnA.css';

class SearchQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler (e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-questions">
        <h1 className="header-title">QUESTIONS AND ANSWERS</h1>
        <div className="questions-search">
          <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={this.state.value}
            onChange={this.changeHandler}
          />
          <FontAwesomeIcon className="search-icon" icon="search"/>
        </div>
      </div>
    );
  }
}

export default SearchQuestions;