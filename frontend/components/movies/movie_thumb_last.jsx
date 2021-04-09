import React from 'react';
import { Link } from 'react-router-dom';

class MovieThumbLast extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className="movie-thumb-container-last">
        <Link to={`/movies/${this.props.movie.id}`}>
          <img className="movie-thumb" src={this.props.movie.photo_url}/>
        </Link>
      </li>
    )
  }
}

export default MovieThumbLast;