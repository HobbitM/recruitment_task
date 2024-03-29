import axios from 'axios';

export const fetchTags = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://api.stackexchange.com/2.3/tags?site=stackoverflow");
      dispatch(setTags(response.data.items));
      dispatch(setTotalPages(Math.ceil(response.data.items.length / 10)));
    } catch (error) {
      console.error("Error fetching data:", error);
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