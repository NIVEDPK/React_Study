import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "I want it that way", duration: "2:30" },
    { title: "kodaline ", duration: "3:30" },
    { title: "The Nights", duration: "1:30" },
    { title: "Cool", duration: "2:45" },
  ];
};

const selectedSongReducer = (selectedsong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedsong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
