import React from 'react';
import './modals.css';
import ModalStars from './components/ModalStars.jsx';
import ModalCharacs from './components/ModalCharacs.jsx';
import ModalReviewBody from './components/ModalReviewBody.jsx';
import ModalUpload from './components/ModalUpload.jsx';



class AddReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starClick: false,
      errMessage: ''
    };

    this.starClick = this.starClick.bind(this);
    this.submitReviewHandler = this.submitReviewHandler.bind(this);
  }

  starClick() {
    this.setState({ starClick: true });
  }

  submitReviewHandler(e) {
    if (!this.state.starClick) {
      alert('please choose a star rating');
      event.preventDefault();
      // return;
    }
    console.log(e.target.name);
    console.log(e.target.name.modalStars);
    // this.props.show();
  }


  render () {
    if (!this.props.show) { return null; }

    return (
      <div className="image-modal">
        <div className="image-modal-content">
          <div className="image-modal-header">
            <h4>Write Your Review</h4>
            <h5>About the {this.props.productName || 'product'}</h5>
          </div>

          <div className="image-modal-body">
            <form onSubmit={this.submitReviewHandler}>
              <label>Overall Rating* </label>
              <br></br>
              <ModalStars starClick={this.starClick}/>
              <br></br>
              <br></br>

              <label>Do you recommend this product?*</label>
              <br></br>
              <input type="radio" name="yesNo" defaultChecked required/>
              <label>yes</label>
              <input type="radio" name="yesNo"/>
              <label>no</label>
              <br></br>
              <br></br>

              <label>Characteristics*</label>
              <br></br>
              <ModalCharacs reviewsMeta={this.props.reviewsMeta}/>
              <br></br>

              <label>Review Summary*</label>
              <br></br>
              <textarea cols="60" rows="1" maxLength="60" placeholder="Example: Best purchase ever!" required></textarea>
              <br></br>
              <br></br>

              <label>Review Body*</label>
              <br></br>
              <ModalReviewBody/>
              <br></br>
              <br></br>

              <label>Upload Photos</label>
              <br></br>
              <ModalUpload photos={[]}/>
              <br></br>
              <br></br>

              <label>Your nickname*</label>
              <br></br>
              <textarea cols="40" rows="1" maxLength="60" placeholder="Example: jackson11!" required></textarea>

              <br></br>
              <i>For privacy reasons, do not use your full name or email address</i>
              <br></br>
              <br></br>

              <label>Your email*</label>
              <br></br>
              <input placeholder="Example: jackson11@email.com" type="email" maxLength="60" required
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              />
              <br></br>
              <i>For authentication reasons, you will not be emailed</i>

              <div className="image-modal-footer">
                <button className="image-button" onClick={this.props.show}>cancel</button>
                <input className="image-button" type="submit" value="submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddReviewModal;