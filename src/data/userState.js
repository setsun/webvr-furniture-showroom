const initialState = [];

export const ActionTypes = {
  BUTTON_CLICKED: 'BUTTON_CLICKED',
};

export const onButtonClicked = id => ({
  type: ActionTypes.BUTTON_CLICKED,
  payload: { id },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.BUTTON_CLICKED: {
      console.log('FIRED');
      return state.concat(Math.random());
    }
    default:
      return state;
  }
};
