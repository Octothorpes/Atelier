import React from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';
import AddNewAnswer from './Modals/AddNewAnswer.jsx';
import withInteractionsApi from '../HOC/withInteractionApi.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerList: [],
      loadMoreAnswer: false,
      numOfYes: this.props.question.question_helpfulness,
      clickedYes: false,
      showAnswerModal: false
    };
    this.handleMoreAnswer = this.handleMoreAnswer.bind(this);
    this.yesHandler = this.yesHandler.bind(this);
    this.showAnswerModal = this.showAnswerModal.bind(this);
    this.handleModalCancel = this.handleModalCancel.bind(this);
    this.addNewAnswer = this.addNewAnswer.bind(this);
  }

  componentDidMount() {
    const {formatBody} = this.props;
    let answerListResult = [];
    const {question_id: questionId} = this.props.question;
    const getAllAnswers = async () => {
      let pageCount = 1;

      while (true) {
        const params = {
          page: pageCount,
          count: 10
        };
        const body = formatBody(null, null, params);
        let result = await axios.get(`/api/qa/questions/${questionId}/answers`, body);
        if (result.data.results.length === 0) {
          break;
        }
        answerListResult.push(...result.data.results);
        pageCount++;
      }
      return answerListResult;
    };

    getAllAnswers().then((ansList) => {
      const sortedData = ansList.sort((a, b) => {
        if (a.helpfulness > b.helpfulness) {
          return -1;
        } else if (a.helpfulness > b.helpfulness) {
          return 1;
        }
        return 0;
      });
      this.setState({
        answerList: [...sortedData],
      });
    })
      .catch((err) => {
        console.log('Error getting all the answers of a question ', err);
      });

  }

  handleMoreAnswer() {
    this.setState({
      loadMoreAnswer: !this.state.loadMoreAnswer
    });
  }

  showAnswerModal() {
    this.props.sendInteraction('answer-modal');
    this.setState({
      showAnswerModal: true
    });
  }

  handleModalCancel() {
    this.setState({
      showAnswerModal: false
    });
  }

  addNewAnswer(answerBody, name, email, photos) {
    const data = {
      body: answerBody,
      name: name,
      email: email,
      photos: photos
    };

    const {formatBody} = this.props;
    const {question_id: questionId} = this.props.question;
    const body = formatBody(null, null, null, data);
    axios.post(`/api/qa/questions/${questionId}/answers`, body.data)
      .then((result) => {
        console.log('Successfully posted a new answer', result.data);
      })
      .catch((err) => {
        console.log('Error happened while posting a new answer', err);
      });

    this.setState({
      showAnswerModal: false
    });
  }

  yesHandler() {
    this.props.sendInteraction('yes-handler');
    if (this.state.clickedYes === false) {
      this.setState({
        numOfYes: this.state.numOfYes + 1,
        clickedYes: true
      });
      // call the api to mark it as helpful
      const {formatBody} = this.props;
      const {question_id: questionId} = this.props.question;
      axios.put(`/api/qa/questions/${questionId}/helpful`)
        .then((result) => {
          console.log('Successful:');
        })
        .catch((err) => {
          console.log('Error happened during marking the question as helpful', err);
        });
    }

  }

  render() {
    const {question_body: questionBody} = this.props.question;

    const allAnswers = this.state.answerList.map((answer) => {
      return (
        <Answer key={answer.answer_id} answer={answer} formatBody={this.props.formatBody}/>
      );
    });

    return (
      <div className="individual-question">
        <div className="question-header">
          <p style={{fontSize: '16px', fontWeight: 'bold'}}>Q: {questionBody} </p>
          <div className="question-info">
            <p>Helpful? <a onClick={this.yesHandler}>Yes({this.state.numOfYes})</a></p>
            <p style={{marginLeft: '10px', marginRight: '8px'}}>|</p>
            <p style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={this.showAnswerModal}>Add Answer</p>
          </div>
          {this.state.showAnswerModal && <AddNewAnswer onCancel={this.handleModalCancel} addNewAnswer={this.addNewAnswer} /> }
        </div>
        {this.state.answerList.length <= 2 && this.state.answerList.map((answer) => {
          return (
            <Answer key={answer.answer_id} answer={answer} formatBody={this.props.formatBody}/>
          );
        })}
        {this.state.answerList.length > 2 && this.state.loadMoreAnswer === false &&
        <div>
          {this.state.answerList.slice(0, 2).map((answer) => {
            return (
              <Answer key={answer.answer_id} answer={answer} formatBody={this.props.formatBody}/>
            );
          })}
          <a className="load-answer" onClick={this.handleMoreAnswer}>LOAD MORE ANSWERS</a>
        </div>
        }
        {this.state.answerList.length > 2 && this.state.loadMoreAnswer &&
          <>
            <div className="collapse-body">
              {allAnswers}
            </div>
            <a className="load-answer" onClick={this.handleMoreAnswer}> COLLAPSE ANSWERS</a>
          </>
        }
      </div>
    );
  }
}

export default withInteractionsApi(Question, 'Question and Answers');