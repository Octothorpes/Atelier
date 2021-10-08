import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HOC from '../HOC/withInteractionApi.jsx';
import './ProductDetailStyles.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nightShift: this.props.nightShift
    };

    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.props.sendInteraction('Size Selector');
    if (this.state.nightShift === 'nightShiftOff') {
      this.setState({ nightShift: 'nightShiftOn' });
      this.props.grabNightShift('nightShiftOn');
    } else {
      this.setState({ nightShift: 'nightShiftOff' });
      this.props.grabNightShift('nightShiftOff');
    }
  }

  render() {

    return (
      <React.Fragment>
        <div className='globalHeader'>
          <FontAwesomeIcon className='mockSearchIcon' icon='coffee' size='lg' />

          <div id="sunMoon">
            <p id="sun">🌞</p>
            {
              this.state.nightShift === 'nightShiftOn'
                ? <label className="switch">
                  <input type="checkbox" onChange={this.toggleHandler} checked={true}/>
                  <span className="slider round"></span>
                </label>
                : <label className="switch">
                  <input type="checkbox" onChange={this.toggleHandler} checked={false}/>
                  <span className="slider round"></span>
                </label>
            }
            <p id="moon">🌛</p>
          </div>

          <div className='searchBarContainer'>
            <div className='mockSearchBar'></div>
            <FontAwesomeIcon className='mockSearchIcon' icon='search' />
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default HOC(SearchBar, 'ENTER WIDGET NAME HERE');