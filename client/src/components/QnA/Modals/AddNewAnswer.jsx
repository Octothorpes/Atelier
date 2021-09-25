import React from 'react';
import './AddNewAnswer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorMessage from '../ErrorMessage.jsx';

class AddNewAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photos: [],
      answerError: false,
      nicknameError: false,
      emailError: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.answer && this.state.nickname && this.state.email) {
      if (this.validateEmail(this.state.email)) {
        this.setState({
          answerError: false,
          nicknameError: false,
          emailError: false
        });
        // call the api to submit the question and close the modal
        this.props.addNewAnswer(this.state.answer, this.state.nickname, this.state.email, this.state.photos);
        this.props.onCancel();
      } else {
        // error message for wrong email address
        this.setState({
          answerError: false,
          nicknameError: false,
        });
      }
    } else {
      // check if the question field is empty
      if (this.state.answer.length === 0) {
        this.setState({
          answerError: true
        });
      } else {
        this.setState({
          answerError: false
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

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="answer-modal" onClick={this.props.onCancel}>
        <div className="answer-modal-container" onClick={e => e.stopPropagation()}>
          <div className="answer-modal-header">
            <div className="answer-modal-header-title">
              <h2>Submit Your Answer</h2>
              <h4>Product Name: QuestionBody</h4>
            </div>
            <div className="answer-modal-header-cross">
              <h1 style={{color: '#fff', cursor: 'pointer'}} onClick={this.props.onCancel}>X</h1>
            </div>
          </div>
          <div className="answer-modal-main-body">
            <div className="answer-modal-body">
              <h4>Your answer<span style={{color: 'red'}}>*</span></h4>
              {this.state.answerError && <ErrorMessage/>}
              <textarea
                className="answer-modal-input answer-modal-textarea"
                value={this.state.answer}
                onChange={this.changeHandler}
                maxLength="1000"
                name="answer"
                required
              ></textarea>
            </div>
            <div className="answer-modal-nickname">
              <h4>What is your nickname<span style={{color: 'red'}}>*</span></h4>
              {this.state.nicknameError && <ErrorMessage/>}
              <input
                className="answer-modal-input"
                placeholder="Example: jack543!"
                value={this.state.nickname}
                maxLength="60"
                onChange={this.changeHandler}
                name="nickname"
                required
              />
              <div className="answer-modal-privacy-info">
                <FontAwesomeIcon className="privacy-info" icon="info-circle" />
                <p className="privacy-info">For privacy reasons, do not use your full name or email address</p>
              </div>
            </div>
            <div className="answer-modal-email">
              <h4>Your email<span style={{color: 'red'}}>*</span></h4>
              {this.state.emailError && <ErrorMessage/>}
              <input
                className="answer-modal-input"
                placeholder="Example: jack@email.com”"
                value={this.state.email}
                maxLength="60"
                onChange={this.changeHandler}
                name="email"
                required
              />
              <div className="answer-modal-privacy-info">
                <FontAwesomeIcon className="privacy-info" icon="info-circle" />
                <p className="privacy-info">For authentication reasons, you will not be emailed</p>
              </div>
            </div>
            <div className="answer-modal-upload-photos-button">
              <button className="answer-modal-upload-photos">Upload Your Photos</button>
            </div>
          </div>
          <div className="answer-modal-footer">
            <button className="answer-modal-cancel" onClick={this.props.onCancel}>Cancel</button>
            <button className="answer-modal-submit" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewAnswer;