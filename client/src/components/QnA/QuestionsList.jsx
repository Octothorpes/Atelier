import React from 'react';
import './QnA.css';
import Question from './Question.jsx';
import axios from 'axios';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [{}]
    };
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
    return (
      <div className="questions-list">
        {this.state.questionList.map((question) => {
          return <Question key={question.question_id} question={question} formatBody={this.props.formatBody}/>;
        })}
      </div>
    );
  }
}

export default QuestionsList;