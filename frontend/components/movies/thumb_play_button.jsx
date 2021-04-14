import React from 'react'
import { Link } from 'react-router-dom';




function ThumbPlayButton(props){
    let url = "/movies/".concat(props.movieId)
    return (
        <Link to={url}>
            <div className="thumb-play">
                <strong className="material-icons">
                    play_arrow 
                </strong>
            </div>
        </Link>
    )
}

export default ThumbPlayButton;