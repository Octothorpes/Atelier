import React from 'react';
import SearchQuestions from './SearchQuestions.jsx';
import './QnA.css';

class QuestionsNAnswersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.displayStyles.length > 0 &&
        <div className="questions-answers-container">
          <SearchQuestions
            formatBody={this.props.formatBody}
            productId={this.props.productId}
            productName={this.props.productName}
          />
        </div>

    );


  }
}

export default QuestionsNAnswersContainer;

