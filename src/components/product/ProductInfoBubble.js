import 'aframe-animation-component';

import React from 'react';
import PropTypes from 'prop-types';
import {Entity} from 'aframe-react';

import ColorWheelButton from './ColorWheelButton';

class ProductInfoBubble extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <Entity>
        <ColorWheelButton
          colors={[
            '#4CC3D9',
            '#EF2D5E',
            '#FFC65D',
            '#8200AF',
            '#999999',
            '#FCF838'
          ]}
        />
      </Entity>
    );
  }
}

export default ProductInfoBubble;
