import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withInteractionsApi from '../HOC/withInteractionApi.jsx';
let StyleSelector = function (props) {



  let handleInteraction = function () {
    props.sendInteraction('Style Selector');
  };
  let mappedStyles = props.sortedStyles.map((style) => {
    return (
      <div className='style-thumbnail-container' key={style.style_id}>
        <FontAwesomeIcon
          className={
            props.checkedId === style.style_id
              ? 'check-circle active-style'
              : 'check-circle'
          }
          icon='check-circle'
        />

        <img
          id={style.style_id}
          name={style.name}
          alt={style.name}
          onClick={(e) => {
            handleInteraction();
            props.styleClickHandler(
              e,
              style.original_price,
              style.sale_price,
              style['default?']
            );
          }}
          className={'style-thumbnail'}
          src={style.photos[0].thumbnail_url}></img>
      </div>
    );
  });

  return (
    <div className='style-header'>
      Style{':'} <span className='style-name'>{props.defaultStyle}</span>
      <div className='style-selector'>{mappedStyles}</div>
    </div>
  );
};

export default withInteractionsApi(StyleSelector, 'Product Detail');
