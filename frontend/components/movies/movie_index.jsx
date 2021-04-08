import React from 'react';
import { Link } from 'react-router-dom';



class MovieIndex extends React.Component{

    componentDidMount(){
        this.props.fetchMovies()
    }

    render(){
        return(
            <div className="movie-index">
                <h1> Movies go here.</h1>
                <Link to="/movies/1">kickass</Link>
            </div>
        )
    }
}

export default MovieIndex
