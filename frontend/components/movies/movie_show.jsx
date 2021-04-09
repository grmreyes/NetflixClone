import React from 'react';
import { Link } from 'react-router-dom';
import { selectMovie } from '../../reducers/selectors';
//

class MovieShow extends React.Component{
  constructor(props){
    super(props)
  }


  
  render(){
  // var cip = $(".big-video").hover( hoverVideo, hideVideo );

  // function hoverVideo(e) {  
  //   $('big-video', this).get(0).play(); 
  // }
  
  // function hideVideo(e) {
  //   $('big-video', this).get(0).pause(); 
  // }
  return(
    <div>
      <video controls autoPlay className="big-video"> <source src={this.props.movie.video_url} type="video/mp4" /> </video> 
    </div>
  )}
}

export default MovieShow;
