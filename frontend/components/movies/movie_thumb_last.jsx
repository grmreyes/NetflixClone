import React from 'react';
import { Link } from 'react-router-dom';
import MyListButtonContainer from './mylist_button_container'
import ThumbPlayButton from './thumb_play_button'


class MovieThumbLast extends React.Component{
  constructor(props){
    super(props);
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handleEnter(){
    this.idString = "#".concat(this.props.genre).concat(this.props.movie.id)
    let thumbVid = document.querySelector(this.idString);
    thumbVid.play();
    let indexVid = document.querySelector(".index-video");
    if(indexVid){
      if(indexVid.muted===false){
      this.props.forceMute();
    }}
  }

  handleLeave(){
    this.idString = "#".concat(this.props.genre).concat(this.props.movie.id)
    let thumbVid = document.querySelector(this.idString);
    thumbVid.load();
  }

  render(){
    this.idString = this.props.genre.concat(this.props.movie.id)

    return(
      <li key={this.idString} className="movie-thumb-container-last" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <Link to={`/movies/${this.props.movie.id}`}>
          <video className="thumb-vid thumb" id={this.idString} poster={this.props.movie.photo_url}> <source src={this.props.movie.video_url}  type="video/mp4" /> </video> 
        </Link>
        <div className="thumb-info">
          <div className="thumb-buttons">
          <ThumbPlayButton movieId={this.props.movie.id}/>
          <MyListButtonContainer movieId={this.props.movie.id}/>
          </div>
          <h1>{this.props.movie.title}</h1>
          <h3><strong>{this.props.movie.rating}</strong>   {this.props.movie.runtime}</h3>
          <h2>{this.props.movie.genres[0].name}{this.props.movie.genres.length>1? " | "+this.props.movie.genres[1].name : ""}</h2>
        </div>
      </li>
    )
  }
}

export default MovieThumbLast;