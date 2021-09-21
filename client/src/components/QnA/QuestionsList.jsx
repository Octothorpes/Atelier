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
    console.log('More questions and answers are called...');
    this.setState({
      moreAnsweredQuestion: this.state.moreAnsweredQuestion + 2
    });
  }

  componentDidMount() {

    // Destructing props
    const {formatBody} = this.props;
    const params =
     {
       product_id: 47422,
       page: 1,
       count: 5
     };
    const body = formatBody('GET', '/qa/questions', params);

    axios.post('/api/*', body)
      .then((results) => {
        // this.setState({
        //   questionList: [...results.data.results]
        // });
        this.setState((state) => {
          return {
            questionList: [...results.data.results]
          };
        }, () => {
          // call api to get all the questions of that particular product
          let questionListResult = [];
          const getAllQuestions = async () => {
            let pageCount = 1;

            while (true) {
              const params = {
                product_id: 47422,
                page: pageCount,
                count: 10
              };
              const body = formatBody('GET', '/qa/questions', params);
              let result = await axios.post('/api/*', body);
              if (result.data.results.length === 0) {
                break;
              }
              questionListResult.push(...result.data.results);
              pageCount++;
            }
            return questionListResult;
          };

          getAllQuestions().then((questionList) => {
            this.setState({
              questionList: [...questionList]
            });
          });

        });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  render() {
    console.log('Question List: ', this.state.questionList);
    let {moreAnsweredQuestion, questionList} = this.state;
    if (this.state.questionList.length < 1) {
      return (
        <button className="no-question-button">ADD A QUESTION +</button>
      );
    }
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