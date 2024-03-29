const initialState = {
  tags: [],
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TAGS":
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
};

export default tagReducer;
