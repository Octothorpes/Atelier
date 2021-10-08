import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HOC from '../HOC/withInteractionApi.jsx';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nightShift: this.props.nightShift,
      value: true,
    };

    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.props.sendInteraction('Size Selector');
    if (this.state.nightShift === 'nightShiftOff') {
      this.setState({
        nightShift: 'nightShiftOn',
        value: !this.state.value
      });
      this.props.grabNightShift('nightShiftOn');
    } else {
      this.setState({
        nightShift: 'nightShiftOff',
        value: !this.state.value
      });
      this.props.grabNightShift('nightShiftOff');
    }
  }

  render() {

    return (
      <React.Fragment>
        <div className='globalHeader'>
          <FontAwesomeIcon className='mockSearchIcon' icon='coffee' size='lg' />

          {
            this.state.nightShift === 'nightShiftOn'
              ? <label className="switch">
                <input type="checkbox" onChange={this.toggleHandler} name="on" value={this.state.value} checked/>
                <span className="slider round"></span>
              </label>
              : <label className="switch">
                <input type="checkbox" onChange={this.toggleHandler} name="off" value={this.state.value} />
                <span className="slider round"></span>
              </label>
          }

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