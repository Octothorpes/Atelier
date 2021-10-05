import React from 'react';
import './QnA.css';
import Question from './Question.jsx';
import MoreQuestionsNAnswers from './MoreQuestionsNAnswers.jsx';
import AddNewQuestionModal from './Modals/AddNewQuestion.jsx';
import withInteractionsApi from '../HOC/withInteractionApi.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreAnsweredQuestion: 2,
      showModal: false
    };
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.showQuestionModal = this.showQuestionModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showMoreQuestions() {
    this.props.sendInteraction('show-more-questions');
    this.setState({
      moreAnsweredQuestion: this.state.moreAnsweredQuestion + 2
    });
  }

  // show modal method
  showQuestionModal() {
    this.props.sendInteraction('Question Modal');
    this.setState({
      showModal: true
    });
  }

  // handle cancel of modal
  handleCancel() {
    this.setState({
      showModal: false
    });
  }

  render() {
    let {moreAnsweredQuestion} = this.state;
    let {questionList} = this.props;
    if (this.props.questionList.length < 1) {
      if (this.state.showModal) {
        return (
          <AddNewQuestionModal
            onCancel={this.handleCancel}
            addNewQuestion={this.props.addNewQuestion}
            productName={this.props.productName}
          />
        );
      }

      return (
        <button className="no-question-button" onClick={this.showQuestionModal}>ADD A QUESTION +</button>
      );
    }
    if (this.props.questionList.length <= 2) {
      return (
        <div className="questions-list">
          {this.props.questionList.map((question) => {
            return <Question
              key={question.question_id}
              question={question}
              formatBody={this.props.formatBody}
              productName={this.props.productName}
            />;
          })}
          <button className="no-question-button" onClick={this.showQuestionModal}>ADD A QUESTION +</button>
          {this.state.showModal && <AddNewQuestionModal
            onCancel={this.handleCancel}
            addNewQuestion={this.props.addNewQuestion}
            productName={this.props.productName}
          />}
        </div>
      );
    }
    return (
      <>
        <div className="questions-list">
          {this.props.questionList.slice(0, moreAnsweredQuestion).map((question) => {
            return <Question
              key={question.question_id}
              question={question}
              formatBody={this.props.formatBody}
              productName={this.props.productName}
            />;
          })}

        </div>
        <div>
          {questionList.length > 2 && moreAnsweredQuestion < questionList.length && <MoreQuestionsNAnswers showMoreQuestions={this.showMoreQuestions} showQuestionModal={this.showQuestionModal} />}
        </div>
        <div>
          {questionList.length > 2 && moreAnsweredQuestion >= questionList.length &&
            <button className="no-question-button" onClick={this.showQuestionModal}>ADD A QUESTION +</button>}
        </div>

        {this.state.showModal && <AddNewQuestionModal
          onCancel={this.handleCancel}
          addNewQuestion={this.props.addNewQuestion}
          productName={this.props.productName}
        />}
      </>

    );
  }
}

export {QuestionsList};
export default withInteractionsApi(QuestionsList, 'Questions and Answers');
