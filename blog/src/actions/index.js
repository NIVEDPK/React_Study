import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch) => {
    const promise = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POST",
      payload: promise,
    });
  };
};
