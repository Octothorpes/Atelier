import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

let SearchBar = function (props) {
  return (
    <div className='globalHeader'>
      <FontAwesomeIcon className='mockSearchIcon' icon='coffee' size='lg' />
      <div className='searchBarContainer'>
        <div className='mockSearchBar'></div>
        <FontAwesomeIcon className='mockSearchIcon' icon='search' />
      </div>
    </div>
  );
};

export default SearchBar;
