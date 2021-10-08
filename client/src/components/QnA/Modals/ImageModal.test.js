import React from 'react';
import { shallow } from 'enzyme';
import ImageModal from './ImageModal.jsx';

test('<ImageModal /> has image container', () => {
  const wrapper = shallow(<ImageModal source="https://abc.com"/>);
  expect(wrapper.find('.image-modal-container')).toHaveLength(1);
});

test('<ImageModal /> container has two children', () => {
  const wrapper = shallow(<ImageModal source="https://abc.com"/>);
  expect(wrapper.find('.image-modal-container').children()).toHaveLength(2);
});

test('<ImageModal /> container closes image modal', () => {
  const imageProps = {
    source: 'https://abc.com',
    onCancel: jest.fn(() => 1)
  };
  const wrapper = shallow(<ImageModal source="https://abc.com"/>);
  const event = {target: {name: 'special', value: 'party'}, stopPropagation: jest.fn(() => 1)};
  wrapper.find('.image-modal-container').simulate('click', event);
  expect(event.stopPropagation).toHaveBeenCalled();
});
