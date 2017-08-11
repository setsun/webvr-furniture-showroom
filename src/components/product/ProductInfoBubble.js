import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

import AddToCartButton from './AddToCartButton';
import ExpandDescriptionButton from './ExpandDescriptionButton';
import ColorPaletteButton from './ColorPaletteButton';

class ProductInfoBubble extends React.Component {
  static propTypes = {
    product: PropTypes.object,
    onAddToCart: PropTypes.func,
    onVariantChange: PropTypes.func,
    onCategorySelect: PropTypes.func,
  }

  renderBubble() {
    return (
      <a-entity position="0.5 0.5 0">
        <a-circle
          position="0.5 0 0"
          radius="0.5"
        />
        <a-plane
          position="0 0 0"
          height="1"
          width="1"
        />
        <a-circle
          position="-0.5 0 0"
          radius="0.5"
        />
      </a-entity>
    )
  }

  renderDescription() {
    const {
      product: {
        name,
        price
      }
    } = this.props;

    return (
      <a-entity position="-0.15 0.75 0">
        <a-text font="exo2bold" position="0 -0.1 0" value={name} color="#000000"/>
        <a-text font="exo2semibold" position="0 -0.35 0" scale="0.75 0.75 0.75" value={"$" + price} color="#8200FF"/>
      </a-entity>
    );
  }

  render() {
    const {
      product,
      onAddToCart,
      onVariantChange,
      onCategorySelect,
    } = this.props;

    return (
      <a-entity>
        {this.renderBubble()}
        {this.renderDescription()}
        <a-entity position="-0.25 -0.25 0.01">
          <AddToCartButton
            onAddToCart={() => onAddToCart()}
          />
        </a-entity>
        <a-entity position="0.75 0 0.02">
          {onCategorySelect && (
            <ExpandDescriptionButton
              onExpandDescription={() => onCategorySelect()}
            />
          )}
        </a-entity>
        <a-entity position="1 0 0.03">
          {onVariantChange && (
            <ColorPaletteButton
              product={product}
              onColorChange={(modelId, textureId) => onVariantChange(modelId, textureId)}
            />
          )}
        </a-entity>
      </a-entity>
    );
  }
}

export default ProductInfoBubble;
