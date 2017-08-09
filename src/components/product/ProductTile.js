import 'aframe-animation-component';
import 'aframe-layout-component';

import React from 'react';
import PropTypes from 'prop-types';
import {Entity} from 'aframe-react';

import ColorWheelButton from '../buttons/ColorWheelButton';

class ProductTile extends React.Component {
  static propTypes = {
    position: PropTypes.string,
    product: PropTypes.object,
  }

  static defaultProps = {
    position: "0 0.75 -2"
  }

  constructor(props) {
    super(props);
    this.state = {
      buttonActive: false,
    }
  }

  toggleTileActive() {
    this.setState({
      buttonActive: !this.state.buttonActive
    });
  }

  render() {
    const {
      position
    } = this.props;

    return (
      <Entity position={position}>
        <Entity>
          <ColorWheelButton colors={[
            '#4CC3D9',
            '#EF2D5E',
            '#FFC65D',
            '#8200AF',
            '#999999',
            '#FCF838'
          ]}/>
        </Entity>
        <a-entity
          obj-model="obj: #tree-obj; mtl: #tree-mtl"
          scale="0.5 0.5 0.5"
          events={{
            click: this.toggleTileActive,
          }}
        />
      </Entity>
    );
  }
}

export default ProductTile;
