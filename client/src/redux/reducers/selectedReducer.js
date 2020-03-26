const selectedReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_STYLE':
      return { ...state, style: action.payload };
    case 'SELECT_THUMBNAIL':
      return { ...state, thumbnailIndex: action.payload };
    default:
      return state;
  }
};

export default selectedReducer;
