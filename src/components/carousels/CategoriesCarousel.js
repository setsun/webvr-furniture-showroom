import 'aframe-animation-component';
import 'aframe-layout-component';

import React from 'react';
import PropTypes from 'prop-types';

class CategoriesCarousel extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  }

  rotateLeft() {
    this.setState({});
  }

  rotateRight() {
    this.setState({});
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
      <a-entity position="0 2 -0.2" rotation="90 0 0">
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
      </a-entity>
    );
  }

  render() {
    return (
      <a-entity
        position="0 2.5 0"
        rotation="-90 0 0"
        animation="property: position; dur: 1500; to: 0 1.5 0">
        {this.renderRing()}
        {this.renderButtons()}
        {this.renderProducts()}
      </a-entity>
    );
  }
}

export default CategoriesCarousel;
