import React from 'react'
import { selectSong } from '../Services/actions'
import SongList from "./SongList"
function App() {
    return (
        <div className="ui container">
           <SongList />
        </div>
    )
}

export default App
