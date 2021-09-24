import React from 'react';
import galleryModalStyles from './galleryModalStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    console.log('here', this.props.selectedIndex);
    this.state = {
      expanded: true,
      zoomed: false,
      image: this.props.image,
      selectedPhotos: this.props.selectedPhotos,
      selectedIndex: this.props.selectedIndex,
      min: 0,
      max: this.props.selectedPhotos.length,
    };
    this.displayModal = this.displayModal.bind(this);
    this.expandedArrowClick = this.expandedArrowClick.bind(this);
  }

  displayModal() {
    this.setState({ expanded: !this.state.expanded });
  }
  expandedArrowClick(e) {
    //let index = document.getElementById(this.props.selectedIndex);
    // Just Make the Buttons Disappear!

    let index = this.props.selectedIndex;
    if (index < this.state.max) {
      let higherIndex = this.state.selectedIndex + 1;

      this.setState({
        selectedIndex: higherIndex,
        image: this.props.selectedPhotos[higherIndex].url,
      });
    }


    console.log('index', index, higherIndex);
    console.log('selectedPhotos', this.state);
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.displayModal}> open modal</button>
        <div
          id='expandedImage'
          className='expanded-image-modal'
          style={
            this.state.expanded ? { display: 'block' } : { display: 'none' }
          }>
          <button onClick={this.displayModal}>close modal</button>
          <div className='expanded-image-overlay'>
            <button className='expanded-image-left-arrow'>
              <FontAwesomeIcon role='button' icon='arrow-left' />
            </button>
            <button
              onClick={this.expandedArrowClick}
              className='expanded-image-right-arrow'>
              <FontAwesomeIcon role='button' icon='arrow-right' />
            </button>
            <div className='expanded-image-container'>
              {/* <ul className='expanded-image-list'></ul> */}
              <img
                id={this.state.selectedIndex}
                className='expanded-image_image'
                src={this.state.image}></img>
            </div>
            <div className='expanded-image-icon-container'>
              <FontAwesomeIcon
                className='expanded-image-icon'
                icon={['fas', 'circle']}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GalleryModal;
/*
 <FontAwesomeIcon icon={['far', 'star']} />
*/
