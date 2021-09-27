import React from 'react';
import './AddNewAnswer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorMessage from '../ErrorMessage.jsx';
import axios from 'axios';
import ImageModal from './ImageModal.jsx';

class AddNewAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      answerError: false,
      nicknameError: false,
      emailError: false,
      numOfImageUploaded: 0,
      listOfImageURL: [],
      listOfImageFile: [],
      listOfUploadURL: [],
      showImageModal: false,
      clickedImageUrl: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUploadPhotos = this.handleUploadPhotos.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleSubmit(e) {
    if (this.state.answer && this.state.nickname && this.state.email) {
      if (this.validateEmail(this.state.email)) {
        this.setState({
          answerError: false,
          nicknameError: false,
          emailError: false
        });
        // call the api to submit the question and close the modal
        this.props.addNewAnswer(this.state.answer, this.state.nickname, this.state.email, this.state.listOfUploadURL);
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
    let formData = new FormData();
    for (let imageFile of this.state.listOfImageFile) {
      formData.append('photos', imageFile);
    }

    axios.post('/photos', formData,
      {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }
    ).then((result) => {
      console.log('Successfully uploaded photos to server ', result.data);
    }).catch(err => {
      console.log('Error happened while uploading photos ', err);
    });
    window.location.reload();
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onCancel() {
    this.setState({
      showImageModal: false
    });
  }

  imageHandler(imageURL) {
    this.setState({
      showImageModal: true,
      clickedImageUrl: imageURL
    });
  }

  handleUploadPhotos(e) {
    var uploadURL = 'http://localhost:3000/' + e.target.value.substring(12);
    var imageSrc = URL.createObjectURL(e.target.files[0]);
    this.setState({
      numOfImageUploaded: this.state.numOfImageUploaded + 1,
      listOfImageURL: [...this.state.listOfImageURL, imageSrc],
      listOfImageFile: [...this.state.listOfImageFile, e.target.files[0]],
      listOfUploadURL: [...this.state.listOfUploadURL, uploadURL]
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
            <div className="answer-modal-upload-photos">
              <div>
                {this.state.numOfImageUploaded < 5 &&
                <label htmlFor="upload-photos" className="answer-modal-upload-photos-button">Upload Your Photos</label>}
                <input id ="upload-photos" style={{visibility: 'hidden'}} type="file" multiple onChange={this.handleUploadPhotos}/>
              </div>
              <div>
                {this.state.listOfImageURL.map((imageURL, index) => {
                  return (
                    <img className="uploaded-images" key={index} src={imageURL} onClick={() => this.imageHandler(imageURL)}/>
                  );

                })}
                {this.state.showImageModal && <ImageModal source={this.state.clickedImageUrl} onCancel={this.onCancel}/>}
              </div>

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