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
        {false && <a-image src="#icon-add-to-cart" />}
        <a-circle
          radius="0.11"
          color="#8200FF"
        />
      </a-entity>
    );
  }
}

export default AddToCartButton;
