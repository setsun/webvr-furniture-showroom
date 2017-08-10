import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

import AddToCartButton from './AddToCartButton';
import ExpandDescriptionButton from './ExpandDescriptionButton';
import ColorPaletteButton from './ColorPaletteButton';

class ProductInfoBubble extends React.Component {
  static propTypes = {
    product: PropTypes.object,
  }

  render() {
    const {
      product
    } = this.props;

    return (
      <a-entity>
        <a-entity position="0.5 0 0.01">
          <AddToCartButton
            onAddToCart={() => console.log('ATC clicked!')}
          />
        </a-entity>
        <a-entity position="0.75 0 0.02">
          <ExpandDescriptionButton
            onExpandDescription={() => console.log('ED clicked!')}
          />
        </a-entity>
        <a-entity position="1 0 0.03">
          <ColorPaletteButton
            colors={product.colors}
          />
        </a-entity>
      </a-entity>
    );
  }
}

export default ProductInfoBubble;
