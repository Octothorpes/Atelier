import React from 'react';
import galleryModalStyles from './galleryModalStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      zoomed: false,
    };
    this.displayModal = this.displayModal.bind(this);
  }

  displayModal() {
    this.setState({ expanded: !this.state.expanded });
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
            <button className='expanded-image-right-arrow'>
              <FontAwesomeIcon role='button' icon='arrow-right' />
            </button>
            <div className='expanded-image-container'>
              text
              <ul className='expanded-image-list'></ul>
            </div>
            <div className='expanded-image-icon-container'>
              <FontAwesomeIcon className='expanded-image-icon' icon={['fas', 'circle']} />
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
