import productData from './product.json';

// var productsList = JSON.parse(productData);
const productsList = [];

const initialState = {
  products: productsList,
  currentSelectedProductId: 0,
  cart:[]
};

export const ActionTypes = {
  TEXTURE_CHANGE: 'TEXTURE_CHANGE',
  ADD_TO_CART: 'ADD_TO_CART',
  ON_PRODUCT_CLICK: 'ON_PRODUCT_CLICK'
};

export const onTextureChange = (payload) => ({
  type: ActionTypes.TEXTURE_CHANGE,
  payload,
});

export const onProductClick = (id) => ({
  type: ActionTypes.ON_PRODUCT_CLICK,
  payload:id,
});

export const addToCart = id => ({
  type: ActionTypes.ADD_TO_CART,
  payload: id,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TEXTURE_CHANGE: {
      console.log("clicked ", action)
      //what texture was clicked
      //change the state of object
      return state.concat(action.payload);
    }
    case ActionTypes.ADD_TO_CART:{
      return state.cart.concat(action.payload)
    }
    case ActionTypes.ON_PRODUCT_CLICK:{
      return {...state, currentProductId: action.payload};
    }
    default:
      return state;
  }
};
