import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends React.Component {
  static propTypes = {
    onAddToCart: PropTypes.func.isRequired,
  }

  render() {
    const {
      onAddToCart,
    } = this.props;

    return (
      <a-entity onClick={() => onAddToCart()}>
        <a-image
          src="#icon-cart-circle"
          height="0.25"
          width="0.25"
        />
        <a-ring
          material="transparent: true; opacity: 0.75;"
          radius-inner="0.125"
          radius-outer="0.15"
        />
      </a-entity>
    );
  }
}

export default AddToCartButton;
