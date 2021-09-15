import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


let Features = function (props) {
  return (
    <div className='features-map'>
      {props.features.map((feature, id) => {
        return (
          <div className='feature-lockup' key={id}>
            <FontAwesomeIcon icon='check' />{' '}
            <span className='feature-list'>
              {feature.value}
              {feature.feature}
            </span>
          </div>
        );
      })}
    </div>
  );
};


export default Features;