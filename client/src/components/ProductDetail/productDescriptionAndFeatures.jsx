import React from 'react';
import ProductDetailStyles from './ProductDetailStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProductDescriptionAndFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dummyFeatures: [
        {
          feature: 'Sole',
          value: 'Rubber',
        },
        {
          feature: 'Material',
          value: 'FullControlSkin',
        },
        {
          feature: 'Mid-Sole',
          value: 'ControlSupport Arch Bridge',
        },
        {
          feature: 'Stitching',
          value: 'Double Stitch',
        },
      ],
    };
  }

  render() {
    return (
      <div className='product-description_features-container'>
        <div className='product-description_features'>
          <h3> Product Slogan Placeholder. </h3>

          <p>
            Description: Now where da boxes where I keep mine? You should peep
            mine, maybe once or twice but never three times. I'm just a sneaker
            pro, I love Pumas and shell toes, but can't nothin compare to a
            fresh crispy white pearl
          </p>
        </div>

        <div className='features'>
          <Features features={this.state.dummyFeatures} />
        </div>
      </div>
    );
  }
}

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
    // <div>
    //   <div className='feature-lockup'>
    //     <FontAwesomeIcon icon='check' />{' '}
    //     <span className='feature-list'>Feature1</span>
    //   </div>
    //   <div className='feature-lockup'>
    //     <FontAwesomeIcon icon='check' />{' '}
    //     <span className='feature-list'>
    //       Feature2 has features that are featureful and organic. they are
    //       locally sourced from your butt.{' '}
    //     </span>
    //   </div>
    //   <div className='feature-lockup'>
    //     <FontAwesomeIcon icon='check' />{' '}
    //     <span className='feature-list'>Feature3</span>
    //   </div>
    // </div>
  );
};

export default ProductDescriptionAndFeatures;
