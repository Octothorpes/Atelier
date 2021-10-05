import React from 'react';
var dayjs = require('dayjs');
import axios from 'axios';
import ImageModal from './Modals/ImageModal.jsx';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedYes: false,
      numOfYes: this.props.answer.helpfulness,
      reportText: 'Report',
      showImageModal: false,
      clickedImageUrl: ''
    };
    this.yesHandler = this.yesHandler.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.showImageModal = this.showImageModal.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  yesHandler() {
    if (this.state.clickedYes === false) {
      this.setState({
        clickedYes: true,
        numOfYes: this.state.numOfYes + 1
      });
      // call the answer helpfulness api endpoint
      const {formatBody} = this.props;
      const {answer_id: answerId} = this.props.answer;
      axios.put(`/api/qa/answers/${answerId}/helpful`)
        .then((results) => {
          console.log('Successful');
        })
        .catch((err) => {
          console.log('Error while updating the answer helpfulness');
        });

    }

  }

  showImageModal(photoURL) {
    this.setState({
      showImageModal: true,
      clickedImageUrl: photoURL
    });
  }

  onCancel() {
    this.setState({
      showImageModal: false
    });
  }

  handleReport() {
    this.setState({
      reportText: 'Reported'
    });
    // call api endpoint to report the answer
    const {formatBody} = this.props;
    const {answer_id: answerId} = this.props.answer;
    axios.put(`/api/qa/answers/${answerId}/report`)
      .then((results) => {
        console.log('Successfully Reported the answer');
      })
      .catch((err) => {
        console.log('Error while updating the answer helpfulness');
      });
  }

  render() {
    const {answer} = this.props;
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var dayjsObj = dayjs(answer.date);
    var year = dayjsObj.get('year');
    var month = monthNames[dayjsObj.get('month')];
    var dt = dayjsObj.get('date');

    return (
      <div className="answers" key={answer.answer_id}>
        <div className="answers-body">
          <p style={{fontWeight: 'bold', marginRight: '5px', marginBottom: '5px'}}>A:</p>
          <p>
            {answer.body}
          </p>
        </div>
        {this.state.showImageModal && <ImageModal source={this.state.clickedImageUrl} onCancel={this.onCancel}/>}
        <div className="answer-photos">
          {answer.photos.map((photo, index) => {
            return (
              <img className="answer-img" key={photo.id} alt={`img-${index}`} src={photo.url} onClick={() => this.showImageModal(photo.url)}/>
            );
          })}
        </div>
        <div className="answer-info">
          <div>
            <p>by {answer.answerer_name === 'Seller' ? <span style={{fontWeight: 'bold'}}>{answer.answerer_name}</span> : answer.answerer_name},</p>
          </div>
          <div>
            <p>{month} {dt}, {year}</p>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            <p>Helpful? <a className="answer-yes" onClick={this.yesHandler}> Yes </a>({this.state.numOfYes})</p>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            {this.state.reportText === 'Report' ? <p className="report-answer" onClick={this.handleReport}>{this.state.reportText}</p>
              : <p>{this.state.reportText}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Answer;