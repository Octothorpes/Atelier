import React from 'react';
import './ImageModal.css';

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Image source: ', this.props.source);
    return (
      <div className="image-modal">
        <div className="image-modal-container">
          <img className="image-modal-container-img" src={this.props.source}/>
          <h1 className="image-modal-container-close" onClick={this.props.onCancel}>X</h1>
        </div>

      </div>
    );
  }
}

export default ImageModal;