import React from 'react';
import SearchQuestions from './SearchQuestions.jsx';
import QuestionsList from './QuestionsList.jsx';
import MoreQuestionsNAnswers from './MoreQuestionsNAnswers.jsx';
import './QnA.css';

class QuestionsNAnswersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="questions-answers-container">
        <SearchQuestions />
        <QuestionsList formatBody={this.props.formatBody}/>
        <MoreQuestionsNAnswers />
      </div>
    );
  }
}

export default QuestionsNAnswersContainer;

