import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QuestionsList from './QuestionsList.jsx';
import './QnA.css';
import axios from 'axios';
import withInteractionsApi from '../HOC/withInteractionApi.jsx';

class SearchQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      originalQuestionList: [],
      value: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
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
    const body = formatBody(null, null, params);

    axios.get('/api/qa/questions', body)
      .then((results) => {
        this.setState((state) => {
          const sortedData = results.data.results.sort((a, b) => {
            if (a.question_helpfulness > b.question_helpfulness) {
              return -1;
            } else if (a.question_helpfulness > b.question_helpfulness) {
              return 1;
            }
            return 0;
          });
          return {
            questionList: [...sortedData]
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
              const body = formatBody(null, null, params);
              let result = await axios.get('/api/qa/questions', body);
              if (result.data.results.length === 0) {
                break;
              }
              questionListResult.push(...result.data.results);
              pageCount++;
            }
            return questionListResult;
          };

          getAllQuestions().then((questionList) => {
            const sortedData = results.data.results.sort((a, b) => {
              if (a.question_helpfulness > b.question_helpfulness) {
                return -1;
              } else if (a.question_helpfulness > b.question_helpfulness) {
                return 1;
              }
              return 0;
            });
            this.setState({
              questionList: [...sortedData],
              originalQuestionList: [...sortedData]
            });
          });

        });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  changeHandler (e) {
    this.props.sendInteraction('search-questions');
    this.setState((state) => {
      return {
        value: e.target.value
      };
    }, () => {
      if (this.state.value.length >= 3) {
        // filter the question List based on the search term
        const filteredQuestionList = this.state.questionList.filter((question) => {
          return question.question_body.includes(this.state.value);
        });
        this.setState({
          questionList: filteredQuestionList
        });
      } else {
        this.setState({
          questionList: this.state.originalQuestionList
        });
      }

    });
  }

  render() {
    return (
      <>
        <div className="search-questions">
          <h1 className="header-title">QUESTIONS AND ANSWERS</h1>
          <div className="questions-search">
            <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={this.state.value}
              onChange={this.changeHandler}
            />
            <FontAwesomeIcon className="search-icon" icon="search"/>
          </div>
        </div>
        <div>
          <QuestionsList questionList={this.state.questionList} formatBody={this.props.formatBody}/>
        </div>

      </>
    );
  }
}

export default withInteractionsApi(SearchQuestions, 'Questions and Answers');