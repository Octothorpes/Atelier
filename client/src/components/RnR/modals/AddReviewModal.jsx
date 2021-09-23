import React from 'react';
import './modals.css';
import FullStar from '../../svgImages/FullStar.svg';

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
          <form>
            <label>Overall Rating* </label>
            <br></br>
            <img src={FullStar} className="ratingOverviewStars"/>
            <img src={FullStar} className="ratingOverviewStars"/>
            <img src={FullStar} className="ratingOverviewStars"/>
            <img src={FullStar} className="ratingOverviewStars"/>
            <img src={FullStar} className="ratingOverviewStars"/>
            <br></br>
            <br></br>

            <label>Do you recommend this product?*</label>
            <br></br>
            <input type="radio" name="yesNo" defaultChecked/>
            <label>yes</label>
            <input type="radio" name="yesNo"/>
            <label>no</label>
            <br></br>
            <br></br>

            <label>Characteristics*</label>
            <br></br>
            <br></br>

            <label>Review Summary*</label>
            <br></br>
            <input type="text" maxLength="60" placeholder="Example: Best purchase ever!"/>
            <br></br>
            <br></br>

            <label>Review Body*</label>
            <br></br>
            <input type="text" minLength="50" maxLength="1000" placeholder="Why did you like the product or not?"/>
            <br></br>
            <i>Minimum required characters left: ##</i>
            <br></br>
            <br></br>

            <label>Upload Photos</label>
            <br></br>
            <input type="file" id="myFile" name="filename"/>
            <br></br>
            <br></br>

            <label>Your nickname*</label>
            <input type="text" maxLength="60" placeholder="Example: jackson11!"/>
            <br></br>
            <i>For privacy reasons, do not use your full name or email address</i>
            <br></br>
            <br></br>

            <label>Your email*</label>
            <input type="text" maxLength="60" placeholder="Example: jackson11@email.com"/>
            <br></br>
            <i>For authentication reasons, you will not be emailed</i>
          </form>
        </div>

        <div className="image-modal-footer">
          <button className="image-button" onClick={props.show}>cancel</button>
          <button className="image-button" onClick={props.show}>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;