import React from 'react';
import { Link } from 'react-router-dom';


class MovieThumb extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let forceMute = this.props.forceMute
    $(document).ready(function() {
      $(".thumb-vid").on("mouseover", function(event) {
        this.play();
        let vid = document.querySelector(".index-video");
        if(vid.muted===false){
          forceMute();
        }
        
      }).on('mouseout', function(event) {
        this.load();
      });
    })
    return(
      <li className="movie-thumb-container">
        <Link to={`/movies/${this.props.movie.id}`}>
          <video className="thumb-vid" poster={this.props.movie.photo_url}> <source src={this.props.movie.video_url}  type="video/mp4" /> </video> 
        </Link>

      </li>
    )
  }
}

export default MovieThumb;


