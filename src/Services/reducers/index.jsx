import { combineReducers } from 'redux'

const songReducers = () => {
    return [
        {title: "numb", duration: "3:45"},
        {title: "sugar", duration: "4:50"},
        {title: "battle symhony", duration: "4:20"},
        {title: "faded", duration: "5:00"}
    ];
};

const selectedSongReducers = (selectedSong=null, action) => {
    if (action.type==="SONG_SELECTED") {
        return action.payload;
    };
    return selectedSong;
};

export default combineReducers({
    songs: songReducers,
    selectedSong: selectedSongReducers
});