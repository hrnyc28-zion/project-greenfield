const currentReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_REVIEWS':
      return action.payload;
    default:
      return state;
  }
};

export default currentReviewsReducer;
