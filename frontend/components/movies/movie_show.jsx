import React from 'react';
import { Link } from 'react-router-dom';
import { selectMovie } from '../../reducers/selectors';
//

class MovieShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props.movie)
  }
  
  render(){
  return(
    <div>
      {this.props.movie.title}
      <img className="test" src={this.props.movie.photo_url}/>
    </div>
  )}
}

export default MovieShow;
