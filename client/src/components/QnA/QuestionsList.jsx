import React from 'react';
import './QnA.css';
import Question from './Question.jsx';
import MoreQuestionsNAnswers from './MoreQuestionsNAnswers.jsx';
import axios from 'axios';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      moreAnsweredQuestion: 2
    };
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
  }

  showMoreQuestions() {
    this.setState({
      moreAnsweredQuestion: this.state.moreAnsweredQuestion + 2
    });
  }

  componentDidMount() {

    // Destructing props
    const {formatBody} = this.props;
    const params =
     {
       product_id: 47425,
       page: 1,
       count: 5
     };
    const body = formatBody('GET', '/qa/questions', params);

    axios.post('/api/*', body)
      .then((results) => {
        this.setState({
          questionList: [...results.data.results]
        });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  render() {
    let {moreAnsweredQuestion, questionList} = this.state;
    return (
      <>
        <div className="questions-list">
          {this.state.questionList.slice(0, moreAnsweredQuestion).map((question) => {
            return <Question key={question.question_id} question={question} formatBody={this.props.formatBody}/>;
          })}

        </div>
        <div>
          {questionList.length > 2 && moreAnsweredQuestion < questionList.length && <MoreQuestionsNAnswers showMoreQuestions={this.showMoreQuestions}/>}
        </div>
      </>

    );
  }
}

export default QuestionsList;