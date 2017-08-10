import 'aframe-animation-component';
import 'aframe-layout-component';

import React from 'react';
import PropTypes from 'prop-types';

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
      <a-entity position={position}>
        <a-entity position="0 1 0">
          {infoOpen && <ProductInfoBubble />}
        </a-entity>
        <a-entity
          obj-model="obj: #sq-table-obj; mtl: #sq-table-mtl"
          scale="0.5 0.5 0.5"
        />
      </a-entity>
    );
  }
}

export default ProductTile;
