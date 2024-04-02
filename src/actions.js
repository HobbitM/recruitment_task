import axios from 'axios';

export const fetchTags = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_TAGS_START' });
      const response = await axios.get("https://api.stackexchange.com/2.3/tags?site=stackoverflow");
      dispatch(setTags(response.data.items));
      dispatch(setTotalPages(Math.ceil(response.data.items.length / 10)));
    } catch (error) {
      dispatch({ type: 'FETCH_TAGS_FAILURE', payload: error.message });
    }
  };
};

export const setTags = (tags) => ({
  type: 'SET_TAGS',
  payload: tags,
});

export const setTotalPages = (totalPages) => ({
  type: 'SET_TOTAL_PAGES',
  payload: totalPages,
});