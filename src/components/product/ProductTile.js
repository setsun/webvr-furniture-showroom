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
      position
    } = this.props;
    const {
      infoOpen
    } = this.state;

    return (
      <a-entity position={position}>
        <a-entity position="0 0.75 0">
          {this.renderWaypointButton()}
        </a-entity>
        <a-entity position="0 0.75 0.01">
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
