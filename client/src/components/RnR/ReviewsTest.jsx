import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  console.log(showHideClassName)
  return (
    <React.Fragment>
      <div className={showHideClassName}>
        <section className='modal-main' onClick={handleClose}>
          {children}
          {/* <button onClick={handleClose}> Close </button> */}
        </section>
      </div>
    </React.Fragment>
  );
};


const container = document.createElement('div');
document.body.appendChild(container);

export default Modal;