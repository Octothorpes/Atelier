import React from 'react';
import './modals.css';

const Modal = function(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="image-modal">
      <div className="image-modal-content2">
        <div className="image-modal-header">
        </div>
        <div className="image-modal-body2">
          <img id="displayedModalImage" src={props.photo} onClick={props.hide} alt={`${props.photo}`}/>
        </div>
        <div className="image-modal-footer">
          <button className="image-button" onClick={props.hide}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;