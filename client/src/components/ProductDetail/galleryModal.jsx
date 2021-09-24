import React from 'react';
import galleryModalStyles from './galleryModalStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    let image = this.props.selectedPhotos[this.props.selectedIndex].url;

    this.state = {
      expanded: false,
      zoomed: false,
      image,
      selectedPhotos: this.props.selectedPhotos,
      selectedIndex: this.props.selectedIndex,
      min: 0,
      max: this.props.selectedPhotos.length - 1,
    };

  }

  // componentDidMount() {
  //   this.setState({ selectedIndex: this.props.selectedIndex });
  // }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.displayModal}> open modal</button>
        <div
          id='expandedImage'
          className='expanded-image-modal'
          style={
            this.props.expanded ? { display: 'block' } : { display: 'none' }
          }>
          <button onClick={this.props.displayModal}>close modal</button>
          <div className='expanded-image-overlay'>
            <button
              onClick={this.props.arrowClick}
              id='expanded-left-arrow'
              className='expanded-image-left-arrow'
              style={
                this.props.selectedIndex === 0
                  ? { visibility: 'hidden' }
                  : { visibility: 'visible' }
              }>
              <FontAwesomeIcon
                id='expanded-left-arrow'
                role='button'
                icon='arrow-left'
              />
            </button>
            <button
              onClick={this.props.arrowClick}
              id='expanded-right-arrow'
              className='expanded-image-right-arrow'
              style={
                this.props.selectedIndex === this.state.max
                  ? { visibility: 'hidden' }
                  : { visibility: 'visible' }
              }>
              <FontAwesomeIcon
                id='expanded-right-arrow'
                role='button'
                icon='arrow-right'
              />
            </button>
            <div className='expanded-image-container'>
              {/* <ul className='expanded-image-list'></ul> */}
              <img
                id={this.props.selectedIndex}
                className='expanded-image_image'
                src={this.props.image}></img>
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
