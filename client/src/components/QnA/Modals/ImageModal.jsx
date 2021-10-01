import React from 'react';
import './ImageModal.css';

class ImageModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="image-modal">
        <div className="image-modal-container">
          <img className="image-modal-container-img" src={this.props.source}/>
          <span className="image-modal-container-close" onClick={this.props.onCancel}>X</span>
        </div>

      </div>
    );
  }
}

export default ImageModal;