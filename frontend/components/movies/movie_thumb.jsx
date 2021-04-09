import React from 'react';
import { Link } from 'react-router-dom';


/* <Link to={`/movies/${this.props.movie.id}`}>
<img className="movie-thumb" src={this.props.movie.photo_url}/>
</Link> */

class MovieThumb extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    $(document).ready(function() {
      $(".thumb-vid").on("mouseover", function(event) {
        this.play();
        let vid = document.querySelector(".index-video");
        vid.muted = true;
    
      }).on('mouseout', function(event) {
        //this.currentTime = 0; this.pause();
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


