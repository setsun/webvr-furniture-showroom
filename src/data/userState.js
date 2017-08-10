import productData from './product.js';

// var productsList = JSON.parse(productData);
console.log("product list is ", productData);
// const catagoryList = [];

const initialState = {
  categories: productData,
  currentProduct: 0,
  currentCategory: "Chair",
  cartCarouselOpen: true,
  categoriesCarouselOpen: false,
  cart:[]
};
// {
//       name: 'Fancy Drawer',
//       price: 423.45,
//       modelId: '#drawer-obj',
//       textureId: '#drawer-mtl',
//       colors: [
//         '#4CC3D9',
//         '#EF2D5E',
//         '#FFC65D',
//         '#8200AF',
//         '#999999',
//         '#FCF838'
//       ]
//     }

export const ActionTypes = {
  TEXTURE_CHANGE: 'TEXTURE_CHANGE',
  ADD_TO_CART: 'ADD_TO_CART',
  ON_PRODUCT_CLICK: 'ON_PRODUCT_CLICK',
  ON_CATEGORY_CLICK: 'ON_CATEGORY_CLICK'
};

export const onTextureChange = (payload) => ({
  type: ActionTypes.TEXTURE_CHANGE,
  payload,
});

export const onProductClick = (id) => ({
  type: ActionTypes.ON_PRODUCT_CLICK,
  payload:id,
});

export const onCategoryClick = id => ({
  type: ActionTypes.ON_CATEGORY_CLICK,
  payload: id,
});

export const addToCart = id => ({
  type: ActionTypes.ADD_TO_CART,
  payload: id,
});

export default (state = initialState, action) => {
  console.log('Action Fired:', action.type);
  console.log('Action Payload: ', action.payload);

  switch (action.type) {
    case ActionTypes.TEXTURE_CHANGE: {
      return {...state};
    }
    case ActionTypes.ON_CATEGORY_CLICK:{
      return {...state, currentCategory:action.payload, categoriesCarouselOpen:true};
    }
    case ActionTypes.ADD_TO_CART:{
      return {...state, cartCarouselOpen: true, cart: state.cart.concat(action.payload)}
    }
    case ActionTypes.ON_PRODUCT_CLICK:{
      return {...state, categoriesCarouselOpen: action.payload};
    }
    default:
      return state;
  }
};
