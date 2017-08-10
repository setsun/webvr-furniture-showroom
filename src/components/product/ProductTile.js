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
    onAddToCart: PropTypes.func,
    onVariantChange: PropTypes.func,
    onCategorySelect: PropTypes.func,
  }

  static defaultProps = {
    position: "0 0 0",
    waypointPosition: "0.125 0.75 0.25"
  }

  constructor(props) {
    super(props);
    this.state = {
      infoOpen: false,
      modelId: null,
      textureId: null
    }
  }

  toggleInfoOpen() {
    this.setState({
      infoOpen: !this.state.infoOpen
    });
  }

  handleModelChange(modelId, textureId) {
    this.setState({
      modelId,
      textureId
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

  renderModel() {
    const {
      product: {
        modelId,
        textureId
      }
    } = this.props;

    if (!textureId) {
      return (
        <a-gltf-model src={modelId} scale="0.5 0.5 0.5"></a-gltf-model>
      );
    }

    console.log(this.state.modelId, this.state.textureId);

    return (
      <a-entity
        key={`${this.state.modelId}-${this.state.textureId}-${modelId}`}
        obj-model={`
          obj: ${this.state.modelId || modelId};
          mtl: ${this.state.textureId || textureId};
        `}
        scale="0.5 0.5 0.5"
      />
    );
  }

  render() {
    const {
      position,
      waypointPosition,
      product,
      onAddToCart,
      onVariantChange,
      onCategorySelect,
    } = this.props;
    const {
      infoOpen
    } = this.state;

    return (
      <a-entity position={position}>
        <a-entity position={waypointPosition}>
          {this.renderWaypointButton()}
          <a-entity position="0.25 0.25 0.01">
            {infoOpen && (
              <ProductInfoBubble
                product={product}
                onAddToCart={()=>{
                  this.toggleInfoOpen();
                  this.props.onAddToCart();
                }}
                onVariantChange={onVariantChange ? (modelId, textureId) => this.handleModelChange(modelId, textureId) : null}
                onCategorySelect={onCategorySelect}
              />
            )}
          </a-entity>
        </a-entity>
        {this.renderModel()}
      </a-entity>
    );
  }
}

export default ProductTile;
