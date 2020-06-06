import { combineReducers } from "redux";
import fetchPostReducer from "./fetchPostReducer";
import fetchUserReducer from "./fetchUserReducer";

export default combineReducers({
  posts: fetchPostReducer,
  users: fetchUserReducer,
});
