import React from 'react';
import './QnA.css';

class MoreQuestionsNAnswers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="more-questions-answers">
        <button>MORE ANSWERED QUESTIONS</button>
        <button>ADD A QUESTION <span style={{position: 'relative', left: '15px', fontSize: '20px'}}>+</span></button>
      </div>
    );
  }
}

export default MoreQuestionsNAnswers;