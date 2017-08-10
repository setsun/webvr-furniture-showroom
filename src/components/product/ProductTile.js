import 'aframe-animation-component';
import 'aframe-layout-component';

import React from 'react';
import PropTypes from 'prop-types';

import ProductInfoBubble from './ProductInfoBubble';

class ProductTile extends React.Component {
  static propTypes = {
    position: PropTypes.string,
    waypointPosition: PropTypes.string,
    product: PropTypes.object,
  }

  static defaultProps = {
    position: "0 0 0",
    waypointPosition: "0.125 0.75 0.25"
  }

  constructor(props) {
    super(props);
    this.state = {
      infoOpen: false,
    }
  }

  toggleInfoOpen() {
    this.setState({
      infoOpen: !this.state.infoOpen
    });
  }

  renderWaypointButton() {
    return (
      <a-entity
        onClick={() => this.toggleInfoOpen()}>
        <a-circle
          color="white"
          radius="0.05"
        />
        <a-ring
          color="teal"
          radius-inner="0.05"
          radius-outer="0.075"
        />
        <a-ring
          color="white"
          radius-inner="0.075"
          radius-outer="0.1"
        />
        <a-ring
          color="teal"
          radius-inner="0.1"
          radius-outer="0.11"
        />
      </a-entity>
    )
  }

  render() {
    const {
      position,
      waypointPosition,
      product
    } = this.props;
    const {
      infoOpen
    } = this.state;

    return (
      <a-entity position={position}>
        <a-entity position={waypointPosition}>
          {this.renderWaypointButton()}
          <a-entity position="0 0.2 0">
            {infoOpen && <ProductInfoBubble product={product} />}
          </a-entity>
        </a-entity>
        <a-entity
          obj-model={`
            obj: ${product.modelId};
            mtl: ${product.textureId};
          `}
          scale="0.5 0.5 0.5"
        />
      </a-entity>
    );
  }
}

export default ProductTile;
