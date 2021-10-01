import React from 'react';
import './AddQuestionModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorMessage from '../ErrorMessage.jsx';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: '',
      questionError: false,
      nicknameError: false,
      emailError: false

    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.question && this.state.nickname && this.state.email) {
      if (this.validateEmail(this.state.email)) {
        this.setState({
          questionError: false,
          nicknameError: false,
          emailError: false
        });
        // call the api to submit the question and close the modal
        this.props.addNewQuestion(this.state.question, this.state.nickname, this.state.email);
        this.props.onCancel();
      } else {
        // error message for wrong email address
        this.setState({
          questionError: false,
          nicknameError: false,
        });
      }
    } else {
      // check if the question field is empty
      if (this.state.question.length === 0) {
        this.setState({
          questionError: true
        });
      } else {
        this.setState({
          questionError: false
        });
      }
      if (this.state.nickname.length === 0) {
        this.setState({
          nicknameError: true
        });
      } else {
        this.setState({
          nicknameError: false
        });
      }
      if (this.state.email.length === 0) {
        this.setState({
          emailError: true
        });
      } else {
        this.setState({
          emailError: false
        });
      }
    }

  }

  render() {
    return (
      <div className="modal" onClick={this.props.onCancel}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-title">
              <h1 className="ask-question">Ask your question</h1>
              <h3 className="ask-question">{this.props.productName}</h3>
            </div>
            <div style={{alignSelf: 'center', cursor: 'pointer'}}>
              <h1 style={{color: '#342407', paddingRight: '20px'}} onClick={this.props.onCancel}>X</h1>
            </div>
          </div>
          <div className="modal-body">
            <div>
              <h4>Your Question<span style={{color: 'red'}}>*</span></h4>
              {this.state.questionError && <ErrorMessage/>}
              <textarea
                className="modal-input"
                style={{height: '90px'}}
                name="question"
                value={this.state.question}
                maxLength="1000"
                onChange={this.changeHandler}
                required
              ></textarea>
            </div>
            <div>
              <h4>What is your nickname<span style={{color: 'red'}}>*</span></h4>
              {this.state.nicknameError && <ErrorMessage/>}
              <input
                className="modal-input"
                value={this.state.nickname}
                name="nickname"
                placeholder="Example: jackson11!"
                maxLength="60"
                onChange={this.changeHandler}
                required
              />
              <div className="modal-info">
                <FontAwesomeIcon className="privacy-info" icon="info-circle" />
                <p className="privacy-info">For privacy reasons, do not use your full name or email address</p>
              </div>

            </div>

            <div>
              <h4>Your email<span style={{color: 'red'}}>*</span></h4>
              {this.state.emailError && <ErrorMessage/>}
              <input
                className="modal-input"
                value={this.state.email}
                name="email"
                placeholder="Why did you like the product or not?"
                maxLength="60"
                onChange={this.changeHandler}
                required
              />
              <div className="modal-info">
                <FontAwesomeIcon className="privacy-info" icon="info-circle" />
                <p className="privacy-info">For authentication reasons, you will not be emailed</p>
              </div>

            </div>
          </div>
          <div className="modal-footer">
            <button className="modal-cancel" onClick={this.props.onCancel}>Cancel</button>
            <button className="modal-submit" onClick={this.handleSubmit}>Submit</button>
          </div>

        </div>
      </div>
    );
  }
}

export default QuestionModal;