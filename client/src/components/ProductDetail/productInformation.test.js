/* eslint-disable camelcase */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { library } from '@fortawesome/fontawesome-svg-core';
import SizeAndQuantitySelector from './sizeAndQuantitySelector.jsx';
import { ShallowWrapper } from 'enzyme/build';
import defaultState from '../defaultState';
import productInformationMockProps from './productInformationMockProps';
import ProductInformation from './productInformation.jsx';
import Tracker from './imageGallery.jsx';
import _ from 'underscore';
import AddToCart from './addToCart.jsx';
import EmptyStar from '../svgImages/EmptyStar.svg';
import toJson from 'enzyme-to-json';
import StyleSelector from './styleSelector.jsx';
import CategoryName from './categoryName.jsx';
import GalleryModal from './galleryModal.jsx';
import ProductDetailContainer from './productDetailContainer.jsx';
import App from '../App.jsx';

const props = {
  productRatingStars: productInformationMockProps.productRatingStars,
  sortedStyles: productInformationMockProps.sortedStyles,
  productId: productInformationMockProps.productId,
  displayStyles: productInformationMockProps.displayStyles,
  productInfo: productInformationMockProps.productInfo,
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

// npm t productInformation.test.js
describe('<ProductInformation/>', () => {
  test('setup', () => {
    const wrapper = mount(<ProductInformation {...props} />);
    let productStars = props.productRatingStars;
    wrapper.setState({ state });
    let styleClickHandler = (
      e = { target: { id: '286910' } },
      originalPrice,
      salesPrice,
      def
    ) => {
      const newCheckedId = Number(e.target['id']);
      let newSkus = _.findWhere(props.sortedStyles, {
        style_id: newCheckedId,
      });

      let newStockIsTrue = totalStock(newSkus.skus);
      let thumbIndex = state.selectedThumbIndex;
      if (newSkus.photos[thumbIndex] === undefined) {
        console.log('there are no photos herer');
        thumbIndex = 0;
      }

      setState({
        defaultStyle: e.target.name,
        originalPrice,
        checkedId: newCheckedId,
        salesPrice,
        SkusObj: newSkus.skus,
        selectedThumbIndex: thumbIndex,
        expandedImageIndex: thumbIndex,
        selectedPhoto: newSkus.photos[thumbIndex].url || newSkus.photos[0].url,
        selectedPhotos: newSkus.photos,
        quantity: 0,
        selectedSize: 'Select Size',
        sizeMenu: 1,
        hasStock: newStockIsTrue,
      });
    };

    let totalStock = (SKU) => {
      let currentSku = _.pairs(SKU);
      let sizesStock = currentSku.reduce((quantity, current) => {
        quantity += current[1].quantity;
        return quantity > 0;
      }, 0);
      return sizesStock;
    };

    let quantityOnChange = (e) => {
      let newSelectedQuantity = Number(e.target.value);
      setState({ selectedQuantity: newSelectedQuantity });
    };
    let sizeAndQuantityClickHandler = (e) => {
      let idx = e.target.selectedIndex;
      let skuId = Number(e.target.options[idx]['id']);
      let size = e.target.options[idx].value;
      let quantity = Number(e.target.options[idx].dataset.quantity);
      let newSkus = _.findWhere(props.sortedStyles, {
        // eslint-disable-next-line camelcase
        style_id: state.checkedId,
      }).skus;

      setState({
        quantity: quantity,
        SkusObj: newSkus,
        selectedQuantity: 1,
        selectedSize: size,
        sizeMenu: 1,
      });
    };

    let addToCartClickHandler = (e) => {
      e.preventDefault();
      let skuLength = Object.keys(state.SkusObj).length;

      if (state.selectedSize === 'Select Size') {
        setState({ sizeMenu: skuLength });
      }
    };

    let thumbnailClick = (e) => {
      let idx = e.target.id;
      if (!state.selectedPhotos[idx]) {
        // handle edge case of no corresponding image
        console.log('NO Image here ');
        return;
      }

      let correspondingImage = state.selectedPhotos[idx].url;

      setState({
        selectedPhoto: correspondingImage,
        selectedThumbIndex: Number(idx),
        expandedImageIndex: Number(idx),
      });
    };

    let displayModal = () => {
      setState({
        expanded: !state.expanded,
        zoomed: !state.zoomed,
      });
    };

    let arrowClick = (e) => {
      let arrow = e.target.id;

      if (
        (arrow === 'left-arrow' ||
          arrow === 'arrow-up' ||
          arrow === 'expanded-left-arrow') &&
        state.selectedThumbIndex > 0
      ) {
        let lowerIndex = state.selectedThumbIndex - 1;

        let lowerIndexImage = state.selectedPhotos[lowerIndex].url;

        // element.scrollIntoView(true)
        setState(
          {
            selectedThumbIndex: lowerIndex,
            expandedImageIndex: lowerIndex,
            selectedPhoto: lowerIndexImage,
          },
          () => {
            let classname =
              document.getElementsByClassName('thumbnails')[
                state.selectedThumbIndex
              ];
            var element = document.getElementById(state.selectedThumbIndex);
            classname.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest',
            });
          }
        );
      }

      let max = state.selectedPhotos.length - 1;
      if (
        (arrow === 'right-arrow' ||
          arrow === 'arrow-down' ||
          arrow === 'expanded-right-arrow') &&
        state.selectedThumbIndex < max
      ) {
        let higherIndex = state.selectedThumbIndex + 1;
        let higherIndexImage = state.selectedPhotos[higherIndex].url;
        setState(
          {
            selectedThumbIndex: higherIndex,
            expandedImageIndex: higherIndex,
            selectedPhoto: higherIndexImage,
          },
          () => {
            let classname =
              document.getElementsByClassName('thumbnails')[
                state.selectedThumbIndex
              ];

            classname.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest',
            });
          }
        );
      }
    };

    // const instance = wrapper.instance();
    // expect(wrapper.state().hasStock).toEqual(true);
    let test = styleClickHandler();
    console.log('INSTANCE____', test);
    // let test = toJson(wrapper.find('.style-thumbnail'));
    let test2 = wrapper.find('.style-thumbnail').getElements();
    // let test3 = test2.at(0).instance()
    console.log('TEST', toJson(test2));
    // expect(instance.styleClickHandler).toHaveBeenCalled()
    // expect(wrapper.find('.style-thumbnail')).toHaveLength(9)
  });
});
//   wrapper.containsMatchingElement(
//   <div className='gallery-info-container'>
//   <div className='product-info-container'>
//     <div className='ratings'>
//       <img
//         src={productStars ? productStars[0] : EmptyStar}
//         className='ratingOverviewStars'
//       />
//       <img
//         src={productStars ? productStars[1] : EmptyStar}
//         className='ratingOverviewStars'
//       />
//       <img
//         src={productStars ? productStars[2] : EmptyStar}
//         className='ratingOverviewStars'
//       />
//       <img
//         src={productStars ? productStars[3] : EmptyStar}
//         className='ratingOverviewStars'
//       />
//       <img
//         src={productStars ? productStars[4] : EmptyStar}
//         className='ratingOverviewStars'
//       />
//       {/* <FontAwesomeIcon icon={['far', 'star']} />
//     <FontAwesomeIcon icon={['far', 'star']} />
//     <FontAwesomeIcon icon={['far', 'star']} />
//     <FontAwesomeIcon icon={['far', 'star']} /> */}
//       <a style={{ textDecoration: ' underline' }}> Read All Reviews</a>
//     </div>
//     <CategoryName
//       originalPrice={state.originalPrice}
//       salesPrice={state.salesPrice}
//       productInfo={state.productInfo}
//       productStyles={props.sortedStyles}
//     />

//     <StyleSelector
//       checkedId={state.checkedId}
//       defaultStyle={state.defaultStyle}
//       productStyles={state.productStyles}
//       sortedStyles={props.sortedStyles}
//       photos={props.sortedStyles[0].photos}
//       styleClickHandler={styleClickHandler}
//     />

//     <SizeAndQuantitySelector
//       totalStock={totalStock}
//       hasStock={state.hasStock}
//       sizeMenu={state.sizeMenu}
//       selectedSize={state.selectedSize}
//       selectedQuantity={state.selectedQuantity}
//       quantityOnChange={quantityOnChange}
//       quantity={state.quantity}
//       sizeAndQuantityClickHandler={sizeAndQuantityClickHandler}
//       productStyles={state.productStyles}
//       SkusObj={state.SkusObj}
//       selectedSkus={state.Skus}
//       checkedId={state.checkedId}
//     />
//     <AddToCart
//       hasStock={state.hasStock}
//       addToCartClickHandler={addToCartClickHandler}
//       selectedSize={state.selectedSize}
//       quantity={state.quantity}
//       selectedQuantity={state.selectedQuantity}
//     />
//   </div>
//   <GalleryModal
//     // thumbIndex = {thumbnailClick}
//     zoomed={state.zoomed}
//     thumbnailClick={thumbnailClick}
//     expanded={state.expanded}
//     displayModal={displayModal}
//     onClick={props.arrowClick}
//     arrowClick={arrowClick}
//     image={state.selectedPhoto}
//     selectedIndex={state.expandedImageIndex}
//     selectedPhotos={state.selectedPhotos}
//   />
//   <Tracker
//     expanded={state.expanded}
//     displayModal={displayModal}
//     arrowClick={arrowClick}
//     selectedThumbIndex={state.selectedThumbIndex}
//     thumbnailClick={thumbnailClick}
//     selectedPhotoThumb={state.selectedPhotoThumb}
//     checkedId={state.checkedId}
//     image={state.selectedPhoto}
//     selectedPhotos={state.selectedPhotos}
//     sortedStyles={props.sortedStyles}
//   />
// </div>
// )
