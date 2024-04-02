const initialState = {
  tags: [],
  totalPages: 1,
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TAGS":
      return {
        ...state,
        tags: action.payload,
        loading: false,
        error: null,
      };
    case "SET_TOTAL_PAGES":
      return {
        ...state,
        totalPages: action.payload,
      };
    case "FETCH_TAGS_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_TAGS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
