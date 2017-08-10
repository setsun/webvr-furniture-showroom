import 'aframe-animation-component';
import 'aframe-layout-component';

import React from 'react';
import PropTypes from 'prop-types';

class CategoriesCarousel extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  }

  constructor(props) {
    super(props);

    this.state = {
      willExit: false,
      rotationDegrees: 0
    }
  }

  rotateLeft() {
    const currentDegrees = this.state.rotationDegrees || 0;

    this.setState({rotationDegrees: currentDegrees - 60});
  }

  rotateRight() {
    const currentDegrees = this.state.rotationDegrees || 0;

    this.setState({rotationDegrees: currentDegrees + 60});
  }

  rotateAnimation() {
    const {rotationDegrees} = this.state;

    return (
      <a-animation
        key={Date.now()}
        attribute="rotation"
        easing="linear"
        dur="500"
        to={`0 0 ${rotationDegrees}`}
      />
    );
  }

  exitAnimation() {
    if (!this.state.willExit) {
      return null;
    }

    return `
      property: position;
      dur: 1500;
      to: 0 0 0
    `;
  }


  renderRing() {
    return (
      <a-cylinder
        rotation="90 0 0"
        height="2.5"
        material="side: double; transparent:true; opacity: 0.5;"
        open-ended="true"
        color="gray"
        radius="5"
      />
    );
  }

  renderButtons() {
    return (
      <a-entity position="0 1.75 -0.2" rotation="90 0 0">
        <a-circle
          position="0.75 0 0"
          radius="0.1"
          color="#37474F"
          onClick={() => this.rotateLeft()}
        />
        <a-circle
          position="-0.75 0 0"
          radius="0.1"
          color="#37474F"
          onClick={() => this.rotateRight()}
        />
      </a-entity>
    );
  }

  renderProducts() {
    const products = this.props.products.map((product) => {
      const model = "obj: "+product.modelId+"; mtl:"+ product.textureId;
      return <a-entity obj-model={model} rotation="90 0 0" scale="0.25 0.25 0.25" onClick={()=>this.props.onProductClicked(product.modelId)}/>
    });

    return (
      
      <a-entity layout="type: circle; margin: 6; radius: 3.25">
        <a-entity obj-model="obj: #drawer-obj; mtl: #drawer-mtl" rotation="90 0 0" scale="0.25 0.25 0.25"/>
        <a-entity obj-model="obj: #drawer-obj; mtl: #drawer-mtl" rotation="90 0 0" scale="0.25 0.25 0.25"/>
        <a-entity obj-model="obj: #drawer-obj; mtl: #drawer-mtl" rotation="90 0 0" scale="0.25 0.25 0.25"/>
        <a-entity obj-model="obj: #drawer-obj; mtl: #drawer-mtl" rotation="90 0 0" scale="0.25 0.25 0.25"/>
        <a-entity obj-model="obj: #drawer-obj; mtl: #drawer-mtl" rotation="90 0 0" scale="0.25 0.25 0.25"/>
        <a-entity obj-model="obj: #drawer-obj; mtl: #drawer-mtl" rotation="90 0 0" scale="0.25 0.25 0.25"/>
        <a-entity obj-model="obj: #drawer-obj; mtl: #drawer-mtl" rotation="90 0 0" scale="0.25 0.25 0.25"/>
        <a-entity obj-model="obj: #drawer-obj; mtl: #drawer-mtl" rotation="90 0 0" scale="0.25 0.25 0.25"/>
        <a-entity obj-model="obj: #drawer-obj; mtl: #drawer-mtl" rotation="90 0 0" scale="0.25 0.25 0.25"/>
        <a-entity obj-model="obj: #drawer-obj; mtl: #drawer-mtl" rotation="90 0 0" scale="0.25 0.25 0.25"/>
        {products}
      </a-entity>
    );
  }

  render() {
    return (
      <a-entity
        position="0 2.5 0"
        rotation="-90 0 0"
        animation="property: position; dur: 1500; to: 0 1.5 0"
        animation__exit={this.exitAnimation()}>
        <a-entity>
          {this.rotateAnimation()}
          {this.renderRing()}
          {this.renderProducts()}
        </a-entity>
        {this.renderButtons()}
      </a-entity>
    );
  }
}

export default CategoriesCarousel;
