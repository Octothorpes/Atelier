import React from 'react';
import './Ratings.css';
import RatingsSize from './RatingsSize.jsx';
import RatingsQuality from './RatingsQuality.jsx';
import RatingsComfort from './RatingsComfort.jsx';
import RatingsWidth from './RatingsWidth.jsx';
import RatingsFit from './RatingsFit.jsx';
import RatingsLength from './RatingsLength.jsx';


class RatingsArrowCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };

    this.roundHalf = this.roundHalf.bind(this);
  }

  roundHalf(num) {
    if (!num || num === undefined) { return 0; }
    if (typeof Number(num) !== 'number') { return 0; }
    return Math.round(Number(num) * 2) / 2;
  }


  render() {
    let size, quality, comfort, width, fit, length;
    if (this.props.reviewsMeta.Size) { size = this.roundHalf(this.props.reviewsMeta.Size.value); }
    if (this.props.reviewsMeta.Quality) { quality = this.roundHalf(this.props.reviewsMeta.Quality.value); }
    if (this.props.reviewsMeta.Comfort) { comfort = this.roundHalf(this.props.reviewsMeta.Comfort.value); }
    if (this.props.reviewsMeta.Width) { width = this.roundHalf(this.props.reviewsMeta.Width.value); }
    if (this.props.reviewsMeta.Fit) { fit = this.roundHalf(this.props.reviewsMeta.Fit.value); }
    if (this.props.reviewsMeta.Length) { length = this.roundHalf(this.props.reviewsMeta.Length.value); }

    if (this.props.reviews.results.length === 0) {
      return (
        <React.Fragment></React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <RatingsSize size={size} />
        <RatingsQuality quality={quality}/>
        <RatingsComfort comfort={comfort}/>
        <RatingsWidth width={width}/>
        <RatingsFit fit={fit}/>
        <RatingsLength length={length}/>
      </React.Fragment>
    );
  }
}


export default RatingsArrowCharts;