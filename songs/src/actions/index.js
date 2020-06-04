//Action creator
export const selectSong = (song) => {
  //Return an action
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};
