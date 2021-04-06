import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../../actions/session_actions';


class MovieIndex extends React.Component{
    render(){
        return(
            <h1>
                movies
            </h1>
        )
    }
}

export default MovieIndex
