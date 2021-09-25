import React from 'react';
import galleryModalStyles from './galleryModalStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withInteractionsApi from '../HOC/withInteractionApi.jsx';
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
        <div
          id='expandedImage'
          className='expanded-image-modal'
          style={
            this.props.expanded ? { display: 'block' } : { display: 'none' }
          }>
          <div className='expanded-image-overlay'>
            <button
              className='expanded-image-close-modal'
              onClick={(e) => {
                this.props.sendInteraction('Image Gallery Expanded View');
                this.props.displayModal(e);
              }}>
              close modal
            </button>
            <button
              onClick={(e) => {
                this.props.sendInteraction('Image Gallery Expanded View');
                this.props.arrowClick(e);
              }}
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
              onClick={(e) => {
                this.props.sendInteraction('Image Gallery Expanded View');
                this.props.arrowClick(e);
              }}
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
              {this.props.selectedPhotos.map((photos, i) => {
                return (
                  <button
                    className='expanded-image-icon-button'
                    onClick={(e) => {
                      this.props.sendInteraction('Image Gallery Expanded View');
                      this.props.thumbnailClick(e);
                    }}
                    id={i}
                    key={i}>
                    <span
                      key={i}
                      id={i}
                      className={
                        i === this.props.selectedIndex ? 'dot-active' : 'dot'
                      }></span>
                    {/* <FontAwesomeIcon

                      key={i}
                      id={i}
                      size='lg'
                      className={
                        i === this.props.selectedIndex
                          ? 'expanded-image-icon-active'
                          : 'expanded-image-icon'
                      }
                      icon={['fas', 'circle']}
                    /> */}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withInteractionsApi(GalleryModal, 'Product Detail');
/*
 <FontAwesomeIcon icon={['far', 'star']} />
*/
