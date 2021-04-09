import React from 'react';
import { Link } from 'react-router-dom';

class MovieThumb extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className="movie-thumb-container">
        <Link to={`/movies/${this.props.movie.id}`}>
          <img className="movie-thumb" src={this.props.movie.photo_url}/>
        </Link>
      </li>
    )
  }
}

export default MovieThumb;