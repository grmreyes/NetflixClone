import React from 'react'
import { Link } from 'react-router-dom';




function PlayButton(){
    return (
        <Link className="index-play" to="/movies/1">
            <div className="index-play-items">
                <strong className="material-icons">
                    play_arrow 
                </strong>
                Play
            </div>
        </Link>
    )
}

export default PlayButton;