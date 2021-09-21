import React from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerList: [],
      loadMoreAnswer: false,
      numOfYes: this.props.question.question_helpfulness,
      clickedYes: false
    };
    this.handleMoreAnswer = this.handleMoreAnswer.bind(this);
    this.yesHandler = this.yesHandler.bind(this);
  }

  componentDidMount() {
    const {formatBody} = this.props;
    const {question_id: questionId} = this.props.question;
    const params = {
      page: 1,
      count: 5
    };
    const body = formatBody('GET', `/qa/questions/${questionId}/answers`, params);
    axios.post('/api/*', body)
      .then((results) => {
        this.setState({
          answerList: [...results.data.results]
        });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  handleMoreAnswer() {
    this.setState({
      loadMoreAnswer: !this.state.loadMoreAnswer
    });
  }

  yesHandler() {
    if (this.state.clickedYes === false) {
      this.setState({
        numOfYes: this.state.numOfYes + 1,
        clickedYes: true
      });
      // call the api to mark it as helpful
      const {formatBody} = this.props;
      const {question_id: questionId} = this.props.question;
      const body = formatBody('PUT', `/qa/questions/${questionId}/helpful`);
      axios.post('/api/*', body)
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
            <p style={{textDecoration: 'underline'}}>Add Answer</p>
          </div>

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

export default Question;