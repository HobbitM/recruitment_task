const initialState = {
  tags: [],
  totalPages: 1, // Initial value for total pages
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TAGS":
      return {
        ...state,
        tags: action.payload,
      };
    case "SET_TOTAL_PAGES":
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
