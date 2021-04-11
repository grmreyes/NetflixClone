import React from 'react';
import { Link } from 'react-router-dom';
import MovieThumb from './movie_thumb'
import MovieThumbLast from './movie_thumb_last'
import ProfileGuard from '../splash/profile_guard'



class MovieIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {mute: 'volume_up'}
        this.hideProf=this.hideProf.bind(this);
        this.handleMute=this.handleMute.bind(this);
        this.forceMute=this.forceMute.bind(this);
    }
    componentDidMount(){
        this.props.fetchMovies()

        
        if(window.profHidden===true){
            this.hideProf()
            let vid = document.querySelector(".index-video");
            vid.play();
        }
    }

    hideProf(e){
        let pgDiv = document.querySelector('.profile-guard-container');
        pgDiv.classList.add('hidden');
        window.profHidden = true;
    }

    handleMute(e){
        if(this.state.mute==='volume_up'){
            this.setState({mute: 'volume_off'})
            let vid = document.querySelector(".index-video");
            if(vid){
              vid.muted = true;
            }
        }
        else{
            this.setState({mute: 'volume_up'})
            let vid = document.querySelector(".index-video");
            if(vid){
              vid.muted = false;
            }
        }
    }
    forceMute(e){
        if(this.state.mute==='volume_up'){
            this.setState({mute: 'volume_off'})
            let vid = document.querySelector(".index-video");
            if(vid){
                vid.muted = true;
            }
        }
    }

    render(){
        this.moviesAction = [];
        this.props.movies.forEach(movie =>{
            if(movie.genres[0].name==="Action"){
                this.moviesAction.push(movie);
            }
            else if(movie.genres.length>1){
                if(movie.genres[1].name==="Action"){
                    this.moviesAction.push(movie);
                }
            }
        })
        this.moviesComedy = [];
        this.props.movies.forEach(movie =>{
            if(movie.genres[0].name==="Comedy"){
                this.moviesComedy.push(movie);
            }
            else if(movie.genres.length>1){
                if(movie.genres[1].name==="Comedy"){
                    this.moviesComedy.push(movie);
                }
            }
        })
        this.moviesFamily = [];
        this.props.movies.forEach(movie =>{
            if(movie.genres[0].name==="Family"){
                this.moviesFamily.push(movie);
            }
            else if(movie.genres.length>1){
                if(movie.genres[1].name==="Family"){
                    this.moviesFamily.push(movie);
                }
            }
        })
        this.moviesRomance = [];
        this.props.movies.forEach(movie =>{
            if(movie.genres[0].name==="Romance"){
                this.moviesRomance.push(movie);
            }
            else if(movie.genres.length>1){
                if(movie.genres[1].name==="Romance"){
                    this.moviesRomance.push(movie);
                }
            }
        })
        return(
            
            <div className="movie-index">
                {window.profHiddden? "": <ProfileGuard />}
                <div className="index-video-container">
                    {this.moviesAction.slice(0,1).map((movie) => (
                            <video loop className="index-video"> <source src={movie.big_video_url} type="video/mp4" /> </video> ))
                    }
                </div>
                <img src={window.spiderverse} className="spiderverse-logo" />
                <Link className="index-play" to="/movies/1">
                    <div className="index-play-items">
                        <strong className="material-icons">
                            play_arrow 
                        </strong>
                        Play
                    </div>
                </Link>
                <div className="muteButton">
                    <strong onClick={this.handleMute} className="material-icons">
                        {this.state.mute}
                    </strong>
                </div>
                <div className="mpaa-rating">
                    PG
                </div>
                <div className = "thumbs-container">
                    <Link className="row-heading" to="browse/Action"><h1>Action</h1></Link>
                    <ul className="movie-thumb-row">
                        {this.moviesAction.slice(0,5).map((movie) => (
                            <MovieThumb forceMute={this.forceMute} movie={movie}/>))
                        }
                        {this.moviesAction.slice(5,6).map((movie) => (
                            <MovieThumbLast forceMute={this.forceMute} movie={movie}/>))
                        }
                    </ul>
                    <Link className="row-heading" to="browse/Comedy"><h1>Comedy</h1></Link>
                    <ul className="movie-thumb-row">
                        {this.moviesComedy.slice(0,5).map((movie) => (
                            <MovieThumb forceMute={this.forceMute} movie={movie}/>))
                        }
                        {this.moviesComedy.slice(5,6).map((movie) => (
                            <MovieThumbLast forceMute={this.forceMute} movie={movie}/>))
                        }
                    </ul>
                    <Link className="row-heading" to="browse/Family"><h1>Family</h1></Link>
                    <ul className="movie-thumb-row">
                        {this.moviesFamily.slice(0,5).map((movie) => (
                            <MovieThumb forceMute={this.forceMute} movie={movie}/>))
                        }
                        {this.moviesFamily.slice(5,6).map((movie) => (
                            <MovieThumbLast forceMute={this.forceMute} movie={movie}/>))
                        }
                    </ul>
                    <Link className="row-heading" to="browse/Action"><h1>Romance</h1></Link>
                    <ul className="movie-thumb-row">
                        {this.moviesRomance.slice(0,5).map((movie) => (
                            <MovieThumb forceMute={this.forceMute} movie={movie}/>))
                        }
                        {this.moviesRomance.slice(5,6).map((movie) => (
                            <MovieThumbLast forceMute={this.forceMute} movie={movie}/>))
                        }
                    </ul>
                </div>
            </div>

        )
    }
}

export default MovieIndex
