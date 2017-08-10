import 'aframe-animation-component';

import React from 'react';
import {connect} from 'react-redux';

import ProductTile from '../components/product/ProductTile';
import CartCarousel from '../components/carousels/CartCarousel';
import CategoriesCarousel from '../components/carousels/CategoriesCarousel';
import LoadingScreen from '../components/LoadingScreen';

import {onTextureChange, onProductClick, addToCart, onCategoryClick} from '../data/userState';

const tempData = {
  productMap: {
    table1: {
      name: 'Normal Table',
      price: 23.56,
      modelId: '#wooden-table',
      textureId: null,
      colors: [
        '#4CC3D9',
        '#EF2D5E',
        '#FFC65D',
        '#8200AF',
        '#999999',
        '#FCF838'
      ]
    },
    table2: {
      name: 'Fancy Table',
      price: 123.54,
      modelId: '#sofa',
      textureId: null,
      colors: [
        '#4CC3D9',
        '#EF2D5E',
        '#FFC65D',
        '#8200AF',
        '#999999',
        '#FCF838'
      ]
    },
    drawer: {
      name: 'Fancy Drawer',
      price: 423.45,
      modelId: '#drawer-obj',
      textureId: '#drawer-mtl',
      colors: [
        '#4CC3D9',
        '#EF2D5E',
        '#FFC65D',
        '#8200AF',
        '#999999',
        '#FCF838'
      ]
    }
  }
}

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingScreenOpen: false,
      cartCarouselOpen: false,
      categoriesCarouselOpen: false,
    }
  }

  componentDidMount() {
    // Test redux actions here
    console.log(this.state)
    console.log(this.props.userState);
  }

  provideAssets() {
    return (
      <a-assets timeout="0">
        <img id="icon-jet-circle" src="assets/images/icon-jet-circle.png"></img>
        <img id="icon-cart-circle" src="assets/images/icon-cart-circle.png"></img>
        <img id="icon-color-circle" src="assets/images/icon-color-circle.png"></img>
        <img id="icon-collapse-circle" src="assets/images/icon-collapse-circle.png"></img>
        <img id="icon-expand-circle" src="assets/images/icon-expand-circle.png"></img>
        <img id="icon-left-circle" src="assets/images/icon-left-circle.png"></img>
        <img id="icon-right-circle" src="assets/images/icon-right-circle.png"></img>
        <img id="logo-jet-vr" src="assets/images/logo-jet-vr.png"></img>

        <a-asset-item id="drawer-obj" src="assets/models/drawer/drawer.obj"></a-asset-item>
        <a-asset-item id="drawer-mtl" src="assets/models/drawer/drawer.mtl"></a-asset-item>

        <a-asset-item id="wooden-table" src="assets/models/wooden_table/wooden-coffe-table.gltf"></a-asset-item>
        <a-asset-item id="sofa" src="assets/models/sofa/modern-convertible-sofa-with-pullout-bed.gltf"></a-asset-item>
        <a-asset-item id="table-2" src="assets/models/table_2/attach-demo-table.gltf"></a-asset-item>
        <a-asset-item id="office-chair" src="assets/models/office_chair/office-chair.gltf"></a-asset-item>
        <a-asset-item id="yellow-chair" src="assets/models/yellow_chair/chair.gltf"></a-asset-item>
      </a-assets>
    );
  }

  renderCamera() {
    return (
      <a-camera>
        <a-cursor></a-cursor>
        <a-entity daydream-controls="hand: right"></a-entity>
      </a-camera>
    );
  }

  renderLoadingScreen() {
    return this.state.loadingScreenOpen && <LoadingScreen />;
  }

  renderLoadedScene() {
    if (this.state.loadingScreenOpen) {
      return null;
    }

    return (
      <a-entity>
        {this.renderLogo()}
        {this.renderRoom()}
        {this.renderCartCarousel()}
        {this.renderCategoriesCarousel()}
      </a-entity>
    );
  }

  renderRoom() {
    const {
      onCategoryClick,
      onTextureChange,
      onAddToCart
    } = this.props;

    return (
      <a-entity
        position="0 0 -6"
        scale="2 2 2">
        <ProductTile
          position="-1 0 0"
          onVariantChange={onTextureChange}
          onAddToCart={() => onAddToCart(tempData.productMap.table1)}
          onCategorySelect={()=>onCategoryClick('Chair')}
          product={tempData.productMap.table1}
        />
        <ProductTile
          position="0 0 0"
          onVariantChange={onTextureChange}
          onAddToCart={() => onAddToCart(tempData.productMap.table2)}
          onCategorySelect={ () => onCategoryClick('FancyTable')}
          product={tempData.productMap.table2}
        />
        <ProductTile
          position="1 0 0"
          onVariantChange={(variant)=> onTextureChange}
          onAddToCart={() => onAddToCart(tempData.productMap.drawer)}
          onCategorySelect={() => onCategoryClick('Chair')}
          product={tempData.productMap.drawer}
        />
      </a-entity>
    );
  }

  renderLogo() {
    return (
      <a-curvedimage
        src="#logo-jet-vr"
        height="1"
        radius="5.7"
        theta-length="36"
        rotation="0 145 0"
        position="0 4.5 0"
      />
    );
  }

  renderCartCarousel() {
    return this.props.userState.cartCarouselOpen && <CartCarousel products={this.props.userState.cart}/>;
  }

  renderCategoriesCarousel() {
    const cat = this.props.userState.currentCategory
    console.log('what is cat', cat);
    
    const products = this.props.userState.categories[cat].products
    return this.props.userState.categoriesCarouselOpen && <CategoriesCarousel products={products} onProductClick={this.props.onProductClicked}/>;
  }

  render () {
    return (
      <a-scene>
        <a-sky color="#ECECEC"></a-sky>
        {this.provideAssets()}
        {this.renderCamera()}
        {this.renderLoadingScreen()}
        {this.renderLoadedScene()}
      </a-scene>
    );
  }
}

const mapStateToProps = (state) => {
  return {userState : state.userState};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (productId) => dispatch(addToCart(productId)),
    onTextureChange: (textureId) => dispatch(onTextureChange(textureId)),
    onProductClicked: (productId) => dispatch(onProductClick(productId)),
    onCategoryClick: (categoryId) => dispatch(onCategoryClick(categoryId)),
    // addToCart: (product) => dispatch(addToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
