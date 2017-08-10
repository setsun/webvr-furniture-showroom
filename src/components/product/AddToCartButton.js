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
          height="0.2"
          width="0.2"
        />
        <a-ring
          material="transparent: true; opacity: 0.75;"
          radius-inner="0.1"
          radius-outer="0.125"
        />
      </a-entity>
    );
  }
}

export default AddToCartButton;
