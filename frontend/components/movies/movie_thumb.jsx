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
        <div className="thumb-info">
          <div className="thumb-buttons">


          </div>
          <h3><strong>{this.props.movie.rating}</strong>   {this.props.movie.runtime}</h3>
          <h2>{this.props.movie.genres[0].name}{this.props.movie.genres.length>1? " | "+this.props.movie.genres[1].name : ""}</h2>
        </div>
      </li>
    )
  }
}

export default MovieThumb;


