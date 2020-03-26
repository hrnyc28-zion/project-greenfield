const currentProductReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};

export default currentProductReducer;
