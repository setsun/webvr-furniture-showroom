/*
price = {
  value: 12.35,
  textureId: 'wood'
}
texture = {
  id: 'wood',
  path: '/assets/table_1/Jet_table.mtl'
}
currentTextureId = 'wood';
*/

const initialState = {
  products:[
    {name:'table', current:'wood', textures:['wood','steel','fabric'], prices: [{texture:'wood', price: 12.34}, {texture:'steel', price: 12.34}, {texture:'fabric', price: 12.34}]},
    {base:'chair', current:'wood', textures:['wood','steel','fabric'], prices: [{texture:'wood', price: 12.34}, {texture:'steel', price: 12.34}, {texture:'fabric', price: 12.34}]},
  ],
  currentProductId: 0,
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
