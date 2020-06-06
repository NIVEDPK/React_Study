import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const post = getState().posts;
  const userids = _.uniq(_.map(post, "userId"));
  userids.forEach((userid) => {
    dispatch(fetchUser(userid));
  });
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
