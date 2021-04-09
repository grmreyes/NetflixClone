import React from 'react';
import { Link } from 'react-router-dom';

class MovieThumbLast extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    $(document).ready(function() {
      $(".thumb-vid").on("mouseover", function(event) {
        this.play();
    
      }).on('mouseout', function(event) {
        //this.currentTime = 0; this.pause();
        this.load();
    
      });
    })
    return(
      <li className="movie-thumb-container-last">
        <Link to={`/movies/${this.props.movie.id}`}>
          <video className="thumb-vid" poster={this.props.movie.photo_url}> <source src={this.props.movie.video_url}  type="video/mp4" /> </video> 
        </Link>
      </li>
    )
  }
}

export default MovieThumbLast;