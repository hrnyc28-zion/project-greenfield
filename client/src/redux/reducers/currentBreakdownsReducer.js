const currentBreakdownsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_BREAKDOWNS':
      return action.payload;
    default:
      return state;
  }
};

export default currentBreakdownsReducer;
