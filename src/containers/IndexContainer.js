import 'aframe-animation-component';

import React from 'react';
import {connect} from 'react-redux';
import {Entity, Scene} from 'aframe-react';

import {onTextureChange} from '../data/userState';
import ColorWheelButton from '../components/buttons/ColorWheelButton';
import CartCarousel from '../components/carousels/CartCarousel';
import CategoriesCarousel from '../components/carousels/CategoriesCarousel';

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        '#4CC3D9',
        '#EF2D5E',
        '#FFC65D',
      ]
    }
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <a-asset-item id="tree-obj" src="/assets/table_1/table_1.obj"></a-asset-item>
          <a-asset-item id="tree-mtl" src="/assets/table_1/table_1.mtl"></a-asset-item>
        </a-assets>
        <Entity daydream-controls="hand: right" />
        <ColorWheelButton
          colors={this.state.colors}
          onColorChange= {(color)=>this.props.onButtonClick(color)}
        />
        <CartCarousel />
        <CategoriesCarousel />
      </Scene>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    onButtonClick: onTextureChange
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
