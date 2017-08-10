import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

import AddToCartButton from './AddToCartButton';
import ExpandDescriptionButton from './ExpandDescriptionButton';
import ColorPaletteButton from './ColorPaletteButton';

class ProductInfoBubble extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <a-entity position="0 0 0.01">
        <AddToCartButton
          onAddToCart={() => console.log('ATC clicked!')}
        />
        <a-entity position="0.75 0.25 0">
          <ExpandDescriptionButton
            onExpandDescription={() => console.log('ED clicked!')}
          />
        </a-entity>
        <a-entity position="1 0.25 0">
          <ColorPaletteButton
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
      </a-entity>
    );
  }
}

export default ProductInfoBubble;
