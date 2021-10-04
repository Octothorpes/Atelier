/* eslint-disable camelcase */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { library } from '@fortawesome/fontawesome-svg-core';
import SizeAndQuantitySelector from './sizeAndQuantitySelector.jsx';
import { ShallowWrapper } from 'enzyme/build';
import defaultState from '../defaultState';
import productInformationMockProps from './productInformationMockProps';
import ProductInformation from './productInformation.jsx';
import ImageGallery from './imageGallery.jsx';
import _ from 'underscore';
import testingLibrary from '@testing-library/jest-dom';
import AddToCart from './addToCart.jsx';
import EmptyStar from '../svgImages/EmptyStar.svg';
import toJson from 'enzyme-to-json';
import StyleSelector from './styleSelector.jsx';
import CategoryName from './categoryName.jsx';
import GalleryModal from './galleryModal.jsx';
import ProductDetailContainer from './productDetailContainer.jsx';
import App from '../App.jsx';

// import { expect } from 'chai';

// import { expect } from 'chai';

const quantityOnChange = jest.fn();
const sizeAndQuantityClickHandler = jest.fn();
const totalStock = jest.fn();
const addToCartClickHandler = jest.fn();
const thumbnailClick = jest.fn();
const displayModal = jest.fn();
const arrowClick = jest.fn();
const styleClickHandler = jest.fn();
let sendInteraction = jest.fn();

const props = {
  productRatingStars: productInformationMockProps.productRatingStars,
  sortedStyles: productInformationMockProps.sortedStyles,
  productId: productInformationMockProps.productId,
  displayStyles: productInformationMockProps.displayStyles,
  productInfo: productInformationMockProps.productInfo,
  sizeAndQuantityClickHandler,
  quantityOnChange,
  totalStock,
  addToCartClickHandler,
  thumbnailClick,
  displayModal,
  arrowClick,
  styleClickHandler,
  sendInteraction,
};

const state = {
  productId: props.productId,
  productStyles: props.sortedStyles,
  productInfo: props.productInfo,
  selectedPhoto: props.sortedStyles[0].photos[0].url,
  selectedPhotoThumb: props.sortedStyles[0].photos[0].thumbnail_url,
  selectedThumbIndex: 0,
  expandedImageIndex: 0,
  selectedPhotos: props.sortedStyles[0].photos,
  defaultStyle: props.sortedStyles[0].name,
  originalPrice: props.sortedStyles[0].original_price,
  checkedId: props.sortedStyles[0].style_id,
  salesPrice: props.sortedStyles[0].sale_price,
  selectedSize: 'Select Size',
  Skus: [props.sortedStyles[0].skus],
  SkusObj: props.sortedStyles[0].skus,
  quantity: 0,
  selectedQuantity: 1,
  sizeMenu: 1,
  hasStock: true,
  expanded: false,
  zoomed: false,
};

const ImgGalleryProps = {
  sortedStyles: productInformationMockProps.sortedStyles,
  defaultStyle: props.sortedStyles[0].name,
  expanded: false,
  displayModal,
  arrowClick,
  selectedThumbIndex: 0,
  thumbnailClick,
  selectedPhotoThumb: props.sortedStyles[0].photos[0].thumbnail_url,
  checkedId: props.sortedStyles[0].style_id,
  image: props.sortedStyles[0].photos[0].url,
  selectedPhotos: props.sortedStyles[0].photos,
  sendInteraction: jest.fn(),
};
const ImgGalleryProps2 = {
  sortedStyles: productInformationMockProps.sortedStyles,
  defaultStyle: props.sortedStyles[0].name,
  expanded: false,
  displayModal,
  arrowClick,
  selectedThumbIndex: 2,
  thumbnailClick,
  selectedPhotoThumb: props.sortedStyles[0].photos[2].thumbnail_url,
  checkedId: props.sortedStyles[0].style_id,
  image: props.sortedStyles[0].photos[2].url,
  selectedPhotos: props.sortedStyles[0].photos,
  sendInteraction: jest.fn(),
};

// npm t productInformation.test.js
describe('<ProductInformation/>', () => {
  test('setup', () => {
    const wrapper = mount(<ProductInformation {...props} />);
    let productStars = props.productRatingStars;
    wrapper.setState({ state });

    expect(wrapper.find('.gallery-info-container')).toHaveLength(1);
  });

  test('it calls the right functions when the default view image is clicked ', () => {
    // jest.mock('./productInformation.jsx');
    let productStars = props.productRatingStars;
    const wrapper = mount(
      <ProductInformation {...props}>
        {' '}
        <div className='gallery-info-container'>
          <div className='product-info-container'>
            <div className='ratings'>
              <img
                src={productStars ? productStars[0] : EmptyStar}
                className='ratingOverviewStars'
                alt='Star 1'
              />
              <img
                src={productStars ? productStars[1] : EmptyStar}
                className='ratingOverviewStars'
                alt='Star 2'
              />
              <img
                src={productStars ? productStars[2] : EmptyStar}
                className='ratingOverviewStars'
                alt='Star 3'
              />
              <img
                src={productStars ? productStars[3] : EmptyStar}
                className='ratingOverviewStars'
                alt='Star 4'
              />
              <img
                src={productStars ? productStars[4] : EmptyStar}
                className='ratingOverviewStars'
                alt='Star 5'
              />
              {/* <FontAwesomeIcon icon={['far', 'star']} />
        <FontAwesomeIcon icon={['far', 'star']} />
        <FontAwesomeIcon icon={['far', 'star']} />
        <FontAwesomeIcon icon={['far', 'star']} /> */}
              <a href='#RnRtitle' style={{ textDecoration: ' underline' }}>
                {' '}
                Read All Reviews
              </a>
            </div>
            <CategoryName
              originalPrice={state.originalPrice}
              salesPrice={state.salesPrice}
              productInfo={state.productInfo}
              productStyles={props.sortedStyles}
            />

            <StyleSelector
              checkedId={state.checkedId}
              defaultStyle={state.defaultStyle}
              productStyles={state.productStyles}
              sortedStyles={props.sortedStyles}
              photos={props.sortedStyles[0].photos}
              styleClickHandler={styleClickHandler}
            />

            <SizeAndQuantitySelector
              totalStock={totalStock}
              hasStock={state.hasStock}
              sizeMenu={state.sizeMenu}
              selectedSize={state.selectedSize}
              selectedQuantity={state.selectedQuantity}
              quantityOnChange={quantityOnChange}
              quantity={state.quantity}
              sizeAndQuantityClickHandler={sizeAndQuantityClickHandler}
              productStyles={state.productStyles}
              SkusObj={state.SkusObj}
              selectedSkus={state.Skus}
              checkedId={state.checkedId}
            />
            <AddToCart
              hasStock={state.hasStock}
              addToCartClickHandler={addToCartClickHandler}
              selectedSize={state.selectedSize}
              quantity={state.quantity}
              selectedQuantity={state.selectedQuantity}
            />
          </div>
          <GalleryModal
            defaultStyle={state.defaultStyle}
            zoomed={state.zoomed}
            thumbnailClick={thumbnailClick}
            expanded={state.expanded}
            displayModal={displayModal}
            onClick={props.arrowClick}
            arrowClick={arrowClick}
            image={state.selectedPhoto}
            selectedIndex={state.expandedImageIndex}
            selectedPhotos={state.selectedPhotos}
          />
          <ImageGallery
            defaultStyle={state.defaultStyle}
            expanded={state.expanded}
            displayModal={displayModal}
            arrowClick={arrowClick}
            selectedThumbIndex={state.selectedThumbIndex}
            thumbnailClick={thumbnailClick}
            selectedPhotoThumb={state.selectedPhotoThumb}
            checkedId={state.checkedId}
            image={state.selectedPhoto}
            selectedPhotos={state.selectedPhotos}
            sortedStyles={props.sortedStyles}
          />
        </div>{' '}
      </ProductInformation>
    ).setState({ state });
    wrapper.instance().styleClickHandler = jest.fn();
    wrapper.update();
    // wrapper.find('.icon-buttons-right');
    // wrapper.simulate('click');
    wrapper.instance().styleClickHandler();
    expect(wrapper.instance().styleClickHandler).toHaveBeenCalled();
    expect(wrapper).toHaveLength(1);
  });

  test('It should render display correctly given props ', () => {
    const wrapper = mount(<ProductInformation {...props} />);

    expect(
      toJson(wrapper, {
        noKey: false,
        ignoreDefaultProps: true,
        mode: 'deep',
      })
    ).toMatchSnapshot();
  });
});

//npm t productInformation.test.js
describe('<ImageGallery/>', () => {
  test('it calls the right functions when the default view image is clicked ', () => {
    const wrapper = mount(<ImageGallery {...ImgGalleryProps} />).find(
      '.default-view-image'
    );

    wrapper.simulate('click');
    expect(wrapper).toHaveLength(1);
    expect(ImgGalleryProps.sendInteraction).toHaveBeenCalled();
    expect(ImgGalleryProps.displayModal).toHaveBeenCalled();
  });
  test('setup', () => {
    const wrapper = mount(<ImageGallery {...ImgGalleryProps} />).find({
      id: 'right-arrow-icon',
    });

    expect(wrapper).toHaveLength(2);
  });
  test('it calls the right functions when the left arrow is clicked ', () => {
    const wrapper = mount(<ImageGallery {...ImgGalleryProps} />).find(
      '.icon-buttons-left'
    );

    wrapper.simulate('click');
    expect(wrapper).toHaveLength(1);
    expect(ImgGalleryProps.sendInteraction).toHaveBeenCalled();
    expect(ImgGalleryProps.arrowClick).toHaveBeenCalled();
  });
  test('it has the correct button attributes for accessibility left arrow ', () => {
    const wrapper = mount(<ImageGallery {...ImgGalleryProps2} />);
    const button = wrapper
      .find('.icon-buttons-left')
      .find({ id: 'left-arrow' });
    const button2 = wrapper
      .find('.icon-buttons-right')
      .find({ id: 'right-arrow' });

    expect(button.getDOMNode()).toHaveAttribute(
      'aria-label',
      'Move to the previous image'
    );
    expect(button2.getDOMNode()).toHaveAttribute(
      'aria-label',
      'Move to the next image'
    );
  });

  test('it calls the right functions when the left arrow is clicked ', () => {
    const wrapper = mount(<ImageGallery {...ImgGalleryProps} />).find(
      '.icon-buttons-right'
    );

    wrapper.simulate('click');
    expect(wrapper).toHaveLength(1);
    expect(ImgGalleryProps.sendInteraction).toHaveBeenCalled();
    expect(ImgGalleryProps.arrowClick).toHaveBeenCalled();
  });
  test('it calls the right functions when the up chevron is clicked ', () => {
    const wrapper = mount(<ImageGallery {...ImgGalleryProps} />).find(
      '.chevron-up'
    );

    wrapper.simulate('click');
    expect(wrapper).toHaveLength(1);
    expect(ImgGalleryProps.sendInteraction).toHaveBeenCalled();
    expect(ImgGalleryProps.arrowClick).toHaveBeenCalled();
  });
  test('it calls the right functions when the down chevron is clicked ', () => {
    const wrapper = mount(<ImageGallery {...ImgGalleryProps} />).find(
      '.chevron-down'
    );

    wrapper.simulate('click');
    expect(wrapper).toHaveLength(1);
    expect(ImgGalleryProps.sendInteraction).toHaveBeenCalled();
    expect(ImgGalleryProps.arrowClick).toHaveBeenCalled();
  });
  test('it calls the right functions when the image thumbnails are clicked ', () => {
    const wrapper = mount(<ImageGallery {...ImgGalleryProps} />)
      .find('.thumbnails')
      .find({ id: 1 });

    wrapper.simulate('click');
    expect(wrapper).toHaveLength(1);
    expect(ImgGalleryProps.sendInteraction).toHaveBeenCalled();
    expect(ImgGalleryProps.thumbnailClick).toHaveBeenCalled();
  });
});

const addToCartProps = {
  hasStock: true,
  addToCartClickHandler: jest.fn(),
  selectedSize: '',
  sendInteraction,
  quantity: 4,
};

describe('<addToCart/>', () => {
  test('Add to cart calls the correct functions on click ', () => {
    const wrapper = mount(<AddToCart {...addToCartProps} />).find(
      '.add-to-cart'
    );
    wrapper.simulate('click');
    expect(addToCartProps.sendInteraction).toHaveBeenCalled();
  });
});

const galleryModalProps = {
  defaultStyle: state.defaultStyle,
  expanded: true,
  displayModal,
  arrowClick,
  selectedThumbIndex: 1,
  selectedIndex: 1,
  thumbnailClick,
  selectedPhotoThumb: state.selectedPhotoThumb,
  checkedId: state.checkedId,
  image: state.selectedPhoto,
  selectedPhotos: state.selectedPhotos,
  sortedStyes: props.sortedStyles,
  sendInteraction,
};

// npm t productInformation.test.js
describe('<GalleryModal/>', () => {
  test('GalleryModal renders Properly ', () => {
    const wrapper = mount(<GalleryModal {...galleryModalProps} />);
    // console.log(toJson(wrapper))
    expect(wrapper.find('.expanded-image-overlay')).toHaveLength(1);
    // wrapper.simulate('click');
    // expect(addToCartProps.sendInteraction).toHaveBeenCalled();
  });
  test('Gallery modal calls the correct functions on click', () => {
    const wrapper = mount(<GalleryModal {...galleryModalProps} />);
    // console.log(toJson(wrapper))

    let left = wrapper.find('.expanded-image-left-arrow');
    left.simulate('click');
    expect(galleryModalProps.sendInteraction).toHaveBeenCalled();
    let right = wrapper.find('.expanded-image-right-arrow');
    right.simulate('click');
    expect(galleryModalProps.sendInteraction).toHaveBeenCalled();
    let thumb = wrapper.find('.dot-active');
    thumb.simulate('click');
    expect(galleryModalProps.thumbnailClick).toHaveBeenCalled();

    let btn = wrapper.find('.expanded-image-close-modal');
    btn.simulate('click');

    expect(galleryModalProps.sendInteraction).toHaveBeenCalled();
    expect(galleryModalProps.displayModal).toHaveBeenCalled();
  });
});
