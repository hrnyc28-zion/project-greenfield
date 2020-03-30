const defaultState = {
  product_id: 0,
  ratings: {},
  recommended: {},
  characteristics: {}
};

const currentBreakdownsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_BREAKDOWNS':
      return action.payload;
    default:
      return state;
  }
};

export default currentBreakdownsReducer;
