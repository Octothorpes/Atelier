import React from 'react';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      images: this.props.images,
      defaultImage: this.props.image,
      defaultClass: 'imgGalleryContainer',
      expanded: false,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  handleMouseLeave() {
    console.log('the Mouse LEft!');
    this.state.expanded
      ? this.setState({ defaultClass: 'imgGalleryContainer', expanded: false })
      : null;
  }
  handleImageClick() {
    this.setState({
      defaultClass: 'imgGalleryContainer-active',
      expanded: true,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div
          onMouseLeave={this.handleMouseLeave}
          className={this.state.defaultClass}
          // onMouseMove={this.handleMouseMove}
        >
          <img
            onClick={this.handleImageClick}
            className={'default-view-image'}
            src={this.props.image}></img>

        </div>
        <div onMouseEnter={this.onMouseEnter} className='image-thumnails'>WORD DAWG</div>
      </React.Fragment>
    );
  }
}

export default Tracker;
