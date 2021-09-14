import React from 'react';
import './QnA.css';
import Question from './Question.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="questions-list">
        <Question />
        <Question />
        <Question />
      </div>
    );
  }
}

export default QuestionsList;