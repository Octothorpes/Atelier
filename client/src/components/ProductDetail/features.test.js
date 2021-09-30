import React from 'react';
import { mount, shallow } from 'enzyme';
import ProductDescriptionAndFeatures from './productDescriptionAndFeatures.jsx';
import Features from './features.jsx';
import toJson from 'enzyme-to-json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faCheck);

const props = {
  description: 'This is a test description',
  slogan: 'A slogan for testing: Slowgan.',
  features: [
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

describe('<Features>', () => {
  test('It should render the correct values using default state', () => {
    const wrapper = mount(<Features features={props.features} />);

    expect(
      toJson(wrapper, {
        noKey: false,
        ignoreDefaultProps: true,
        mode: 'deep',
      })
    ).toMatchSnapshot();
  });
});
describe('<ProductDescriptionAndFeatures>', () => {
  test('It should render the correct values using default state', () => {
    const wrapper = mount(<ProductDescriptionAndFeatures {...props}/>);

    expect(
      toJson(wrapper, {
        noKey: false,
        ignoreDefaultProps: true,
        mode: 'deep',
      })
    ).toMatchSnapshot();
  });
});
