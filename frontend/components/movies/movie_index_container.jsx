import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/session_actions';


class MovieIndex extends React.Component{
    render(){
        return(
            <div className="movie-index">
                <h1> Movies go here.</h1>
            </div>
        )
    }
}

export default MovieIndex
