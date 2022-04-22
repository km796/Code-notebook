import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        {title: "bbolibboli", duration: '4:05'},
        {title: 'yesyesyes', duration: '3:04'},
        {title:  'lets learn react', duration: '4:00'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})