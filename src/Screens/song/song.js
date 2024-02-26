
import React from "react";
import MusicPlayerSlider from '../../component/musicplayer/player'
import './song.css'

function Song() {
    return (

        <div className="container">
            <div className="main">
                <div className="song">
                    <MusicPlayerSlider />
                </div>
            </div>
        </div>

    );
}

export default Song;