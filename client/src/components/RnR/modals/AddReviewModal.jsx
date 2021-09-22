import React from 'react';
import './modals.css';

const Modal = function(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="image-modal">
      <div className="image-modal-content">
        <div className="image-modal-header">
          <h4>Write Your Review</h4>
          <h5>About the {props.productName || 'product'}</h5>
        </div>
        <div className="image-modal-body">
          <img id="displayedModalImage" src={props.photo} onClick={props.hide}/>
        </div>
        <div className="image-modal-footer">
          <button className="image-button" onClick={props.show}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;