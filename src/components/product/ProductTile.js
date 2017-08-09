import 'aframe-animation-component';
import 'aframe-layout-component';

import React from 'react';
import PropTypes from 'prop-types';
import {Entity} from 'aframe-react';

import ProductInfoBubble from './ProductInfoBubble';

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
      infoOpen: true,
    }
  }

  toggleInfoOpen() {
    this.setState({
      infoOpen: !this.state.infoOpen
    });
  }

  render() {
    const {
      position
    } = this.props;
    const {
      infoOpen
    } = this.state;

    return (
      <Entity position={position}>
        <Entity position="0 0.5 0">
          {infoOpen && <ProductInfoBubble />}
        </Entity>
        <a-entity
          obj-model="obj: #tree-obj; mtl: #tree-mtl"
          scale="0.5 0.5 0.5"
          events={{
            click: this.toggleInfoOpen,
          }}
        />
      </Entity>
    );
  }
}

export default ProductTile;
