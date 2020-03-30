const setCurrentBreakdowns = (metaData) => {
  return {
    type: `SET_CURRENT_BREAKDOWNS`,
    payload: metaData || null
  };
};

export default setCurrentBreakdowns;
