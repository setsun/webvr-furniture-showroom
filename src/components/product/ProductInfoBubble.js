import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

import ProductColorButton from './ProductColorButton';

class ProductInfoBubble extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <a-entity>
        <ProductColorButton
          colors={[
            '#4CC3D9',
            '#EF2D5E',
            '#FFC65D',
            '#8200AF',
            '#999999',
            '#FCF838'
          ]}
        />
      </a-entity>
    );
  }
}

export default ProductInfoBubble;
