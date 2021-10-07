import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HOC from '../HOC/withInteractionApi.jsx';



// let SearchBar = function (props) {
//   return (
//     <div className='globalHeader'>
//       <FontAwesomeIcon className='mockSearchIcon' icon='coffee' size='lg' />

//       <label className="switch">
//         <input type="checkbox"/>
//         <span className="slider round"></span>
//       </label>

//       <div className='searchBarContainer'>
//         <div className='mockSearchBar'></div>
//         <FontAwesomeIcon className='mockSearchIcon' icon='search' />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;







class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nightShift: 'nightShiftOff'
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

          <label className="switch">
            <input type="checkbox" onClick={this.toggleHandler}/>
            <span className="slider round"></span>
          </label>

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