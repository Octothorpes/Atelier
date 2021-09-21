import React from 'react';
import './Reviews.css';

class RatingsArrowCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };

    this.roundHalf = this.roundHalf.bind(this);
  }

  roundHalf(num) {
    if (typeof Number(num) !== 'number') { return 0; }
    return Math.round(Number(num) * 2) / 2;
  }


  render() {
    let arrow = '▼';
    let characs = this.props.reviewsMeta.characteristics;
    let charSize = this.roundHalf(characs.Size.value);
    let charWidth = this.roundHalf(characs.Width.value);
    let charComfort = this.roundHalf(characs.Comfort.value);
    let charQuality = this.roundHalf(characs.Quality.value);

    console.log(characs);

    return (
      <React.Fragment>
        <div id="sizeChart">
          {characs.Size.value ? 'Size' : null}
          <div className="plot">
            <div className="plotBar">
              <div className="plotBar2">{charSize === 1.0 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 1.5 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 2.0 ? arrow : null}</div>
            </div>
            <div className="plotBar">
              <div className="plotBar2">{charSize === 2.5 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 3.0 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 3.5 ? arrow : null}</div>
            </div>
            <div className="plotBar">
              <div className="plotBar2">{charSize === 4.0 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 4.5 ? arrow : null}</div>
              <div className="plotBar2">{charSize === 5.0 ? arrow : null}</div>
            </div>
          </div>
          <div id="sizeChars">
            <span className="arrowChart">{characs.Size.value ? 'Too Small' : null}</span>
            <span className="arrowChart">{characs.Size.value ? 'Perfect' : null}</span>
            <span className="arrowChart">{characs.Size.value ? 'Too Large' : null}</span>
          </div>
        </div>

        <div id="widthChart">
          {characs.Width.value ? 'Width' : null}
          <div className="plot">
            <div className="plotBar">
              <div className="plotBar2">{charWidth === 1.0 ? arrow : null}</div>
              <div className="plotBar2">{charWidth === 1.5 ? arrow : null}</div>
              <div className="plotBar2">{charWidth === 2.0 ? arrow : null}</div>
            </div>
            <div className="plotBar">
              <div className="plotBar2">{charWidth === 2.5 ? arrow : null}</div>
              <div className="plotBar2">{charWidth === 3.0 ? arrow : null}</div>
              <div className="plotBar2">{charWidth === 3.5 ? arrow : null}</div>
            </div>
            <div className="plotBar">
              <div className="plotBar2">{charWidth === 4.0 ? arrow : null}</div>
              <div className="plotBar2">{charWidth === 4.5 ? arrow : null}</div>
              <div className="plotBar2">{charWidth === 5.0 ? arrow : null}</div>
            </div>
          </div>
          <div id="widthChars">
            <span className="arrowChart">{characs.Width.value ? 'Too Small' : null}</span>
            <span className="arrowChart">{characs.Width.value ? 'Perfect' : null}</span>
            <span className="arrowChart">{characs.Width.value ? 'Too Large' : null}</span>
          </div>
        </div>

        <div id="comfortChart">
          {characs.Comfort.value ? 'Comfort' : null}
          <div className="plot">
            <div className="plotBar">
              <div className="plotBar2">{charComfort === 1.0 ? arrow : null}</div>
              <div className="plotBar2">{charComfort === 1.5 ? arrow : null}</div>
              <div className="plotBar2">{charComfort === 2.0 ? arrow : null}</div>
            </div>
            <div className="plotBar">
              <div className="plotBar2">{charComfort === 2.5 ? arrow : null}</div>
              <div className="plotBar2">{charComfort === 3.0 ? arrow : null}</div>
              <div className="plotBar2">{charComfort === 3.5 ? arrow : null}</div>
            </div>
            <div className="plotBar">
              <div className="plotBar2">{charComfort === 4.0 ? arrow : null}</div>
              <div className="plotBar2">{charComfort === 4.5 ? arrow : null}</div>
              <div className="plotBar2">{charComfort === 5.0 ? arrow : null}</div>
            </div>
          </div>
          <div id="comfortChars">
            <span className="arrowChart">{characs.Comfort.value ? 'Poor' : null}</span>
            <span className="arrowChart">{characs.Comfort.value ? 'Average' : null}</span>
            <span className="arrowChart">{characs.Comfort.value ? 'Great' : null}</span>
          </div>
        </div>

        <div id="qualityChart">
          {characs.Quality.value ? 'Quality' : null}
          <div className="plot">
            <div className="plotBar">
              <div className="plotBar2">{charQuality === 1.0 ? arrow : null}</div>
              <div className="plotBar2">{charQuality === 1.5 ? arrow : null}</div>
              <div className="plotBar2">{charQuality === 2.0 ? arrow : null}</div>
            </div>
            <div className="plotBar">
              <div className="plotBar2">{charQuality === 2.5 ? arrow : null}</div>
              <div className="plotBar2">{charQuality === 3.0 ? arrow : null}</div>
              <div className="plotBar2">{charQuality === 3.5 ? arrow : null}</div>
            </div>
            <div className="plotBar">
              <div className="plotBar2">{charQuality === 4.0 ? arrow : null}</div>
              <div className="plotBar2">{charQuality === 4.5 ? arrow : null}</div>
              <div className="plotBar2">{charQuality === 5.0 ? arrow : null}</div>
            </div>
          </div>
          <div id="qualityChars">
            <span className="arrowChart">{characs.Quality.value ? 'Poor' : null}</span>
            <span className="arrowChart">{characs.Quality.value ? 'Average' : null}</span>
            <span className="arrowChart">{characs.Quality.value ? 'Great' : null}</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default RatingsArrowCharts;