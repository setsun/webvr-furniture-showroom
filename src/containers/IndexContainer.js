import 'aframe-animation-component';

import React from 'react';
import {connect} from 'react-redux';

import ProductTile from '../components/product/ProductTile';
import ProductDescriptionPage from '../components/product/ProductDescriptionPage';
import CartCarousel from '../components/carousels/CartCarousel';
import CategoriesCarousel from '../components/carousels/CategoriesCarousel';

import {onTextureChange} from '../data/userState';

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCarouselOpen: false,
      categoriesCarouselOpen: false,
      productDescriptionPageOpen: false,
    }
  }

  componentDidMount() {
    // Test redux actions here
  }

  provideAssets() {
    return (
      <a-assets>
        <a-asset-item id="table-1-obj" src="assets/models/table_1/Jet_table.obj"></a-asset-item>
        <a-asset-item id="table-1-mtl" src="assets/models/table_1/Jet_table.mtl"></a-asset-item>
        <a-asset-item id="sq-table-obj" src="assets/models/square_table/square_table.obj"></a-asset-item>
        <a-asset-item id="sq-table-mtl" src="assets/models/square_table/square_table.mtl"></a-asset-item>
        <a-asset-item id="drawer-obj" src="assets/models/drawer/drawer.obj"></a-asset-item>
        <a-asset-item id="drawer-mtl" src="assets/models/drawer/drawer.mtl"></a-asset-item>
      </a-assets>
    );
  }

  renderCamera() {
    return (
      <a-camera>
        <a-cursor></a-cursor>
        <a-entity daydream-controls="hand: right"></a-entity>
      </a-camera>
    )
  }

  renderRoom() {
    return (
      <a-entity>
        <a-entity
          position="-1 0 0">
          <ProductTile

          />
        </a-entity>
        <a-entity
          position="0 0 0">
          <ProductTile

          />
        </a-entity>
        <a-entity
          position="1 0 0">
          <ProductTile

          />
        </a-entity>
      </a-entity>
    );
  }

  renderCartCarousel() {
    return this.state.cartCarouselOpen && <CartCarousel />
  }

  renderCategoriesCarousel() {
    return this.state.categoriesCarouselOpen && <CategoriesCarousel />
  }

  renderProductDescriptionPage() {
    return this.state.productDescriptionPageOpen && <ProductDescriptionPage />
  }

  render () {
    return (
      <a-scene>
        <a-sky color="#6EBAA7"></a-sky>
        {this.provideAssets()}
        {this.renderCamera()}
        {this.renderRoom()}
        {this.renderCartCarousel()}
        {this.renderCategoriesCarousel()}
        {this.renderProductDescriptionPage()}
      </a-scene>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
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
