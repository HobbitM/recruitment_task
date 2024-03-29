import axios from 'axios';

export const fetchTags = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow");
      dispatch(setTags(response.data.items));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const setTags = (tags) => ({
  type: 'SET_TAGS',
  payload: tags,
});