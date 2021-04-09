import React from 'react';
import { Link } from 'react-router-dom';
import { selectMovie } from '../../reducers/selectors';
//

class MovieShow extends React.Component{
  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this)
  }

  componentDidMount(){
    this.props.fetchMovie(this.props.movieId);
  }

  handleBack(e){
    this.props.history.goBack()
  }
  
  render(){

  //back button fade
  if (!this.props.movie){
    return null;
  } 
  var interval = null;

  function initInterval(){
      if(interval)
            clear();
      showBack();
      interval = setTimeout(function(){
        $(".back").fadeOut();
        clear();
      },2600);
  }
    
  function clear(){
    window.clearInterval(interval);
    interval = null;
  }
    
  function showBack(){
    $(".back").fadeIn();
  }
    
  function registerEvents(){
      $(document).on("mousemove", function(){
          initInterval();
        });
  }
    
    (function(){
      registerEvents();
    })()


  return(
    <div className="video-container">
      <div className="material-icons">
          <span onClick={this.handleBack} className="back">
            west
          </span>
      </div>
      <video controls autoPlay className="big-video"> <source src={this.props.movie.big_video_url} type="video/mp4" /> </video> 
    </div>
  )}
}

export default MovieShow;
