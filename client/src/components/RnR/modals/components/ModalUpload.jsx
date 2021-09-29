import React from 'react';
import '../../Ratings.css';
import HOC from '../../../HOC/withInteractionApi.jsx';

class ModalUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      photo1: '',
      photo2: '',
      photo3: '',
      photo4: '',
      photo5: ''
    };

    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  fileUploadHandler(e) {
    let uploadURL = 'http://localhost:3000/' + e.target.value.substring(12);

    if (e.target.files[0]) {
      this.props.photos(URL.createObjectURL(event.target.files[0]), false, uploadURL, e.target.files[0]);
      this.setState({ count: this.state.count + 1 });
    } else {
      this.props.photos(null, true, null, null);
      this.setState({ count: this.state.count - 1 });
    }
    this.props.sendInteraction('Write New Review');
  }

  clicked() {
    this.props.sendInteraction('Write New Review');
  }


  render() {
    let images = this.props.photosS.map((item, index) =>
      <img src={item} alt={item} key={index} className="modal-image"/>
    );

    if (this.state.count >= 5) {
      return (
        <React.Fragment>
          {images}
          <br />
        </React.Fragment>
      );
    } else if (this.state.count > 0) {
      return (
        <React.Fragment>
          {images}
          <input type="file" onChange={this.fileUploadHandler} name="photos" onClick={this.clicked}/>
          <br />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {images}
          <input type="file" onChange={this.fileUploadHandler} name="photos" onClick={this.clicked}/>
        </React.Fragment>
      );
    }
  }
}

export default HOC(ModalUpload, 'Ratings & Reviews');