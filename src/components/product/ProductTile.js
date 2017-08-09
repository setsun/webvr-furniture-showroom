import 'aframe-animation-component';
import 'aframe-layout-component';

import React from 'react';
import PropTypes from 'prop-types';
import {Entity} from 'aframe-react';

import ColorWheelButton from '../buttons/ColorWheelButton';

class ProductTile extends React.Component {
  static propTypes = {
    product: PropTypes.object,
  }

  render() {
    return (
      <Entity>
        <ColorWheelButton colors={[
          '#4CC3D9',
          '#EF2D5E',
          '#FFC65D',
        ]}/>
      </Entity>
    );
  }
}

export default ProductTile;
