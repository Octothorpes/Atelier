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
    // this.popImage = this.popImage.bind(this);
  }

  fileUploadHandler(e) {
    if (e.target.files[0]) {
      this.props.photos(URL.createObjectURL(event.target.files[0]));
      this.setState({ count: this.state.count + 1 });
    } else {
      this.props.photos(null, true);
      this.setState({ count: this.state.count - 1 });
    }
    this.props.sendInteraction('Write New Review');
  }

  // popImage() {
  //   this.props.photos.pop();
  //   this.setState({ count: this.state.count - 1 });
  //   this.props.onChangeHandler('photos', this.props.photos);
  // }



  render() {
    let images = this.props.photosS.map((item, index) =>
      <img src={item} alt={item} key={index} className="modal-image"/>
    );

    if (this.state.count >= 5) {
      return (
        <React.Fragment>
          {images}
          <br />
          {/* <button onClick={this.popImage}>delete image</button> */}
        </React.Fragment>
      );
    } else if (this.state.count > 0) {
      return (
        <React.Fragment>
          {images}
          <input type="file" onClick={this.fileUploadHandler}/>
          <br />
          {/* <button onClick={this.popImage}>delete image</button> */}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {images}
          <input type="file" onClick={this.fileUploadHandler}/>
        </React.Fragment>
      );
    }
  }
}

export default HOC(ModalUpload, 'Ratings & Reviews');