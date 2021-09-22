import React from 'react';
import './AddNewAnswer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddNewAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
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
              <textarea
                className="answer-modal-input answer-modal-textarea"
                value={this.state.answer}
                onChange={this.changeHandler}
                name="answer"
              ></textarea>
            </div>
            <div className="answer-modal-nickname">
              <h4>What is your nickname<span style={{color: 'red'}}>*</span></h4>
              <input
                className="answer-modal-input"
                value={this.state.nickname}
                onChange={this.changeHandler}
                name="nickname"
              />
              <div className="answer-modal-privacy-info">
                <FontAwesomeIcon className="privacy-info" icon="info-circle" />
                <p className="privacy-info">For privacy reasons, do not use your full name or email address</p>
              </div>
            </div>
            <div className="answer-modal-email">
              <h4>Your email<span style={{color: 'red'}}>*</span></h4>
              <input
                className="answer-modal-input"
                value={this.state.email}
                onChange={this.changeHandler}
                name="email"
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
            <button className="answer-modal-submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewAnswer;