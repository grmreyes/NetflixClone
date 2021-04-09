import React from 'react';
import { Link } from 'react-router-dom';
import MovieThumb from './movie_thumb'
import MovieThumbLast from './movie_thumb_last'
import ProfileGuard from '../splash/profile_guard'



class MovieIndex extends React.Component{
    componentDidMount(){
        this.props.fetchMovies()
        this.hideProf=this.hideProf.bind(this);
        if(window.profHidden===true){
            this.hideProf()
        }
    }

    hideProf(e){
        let pgDiv = document.querySelector('.profile-guard-container');
        pgDiv.classList.add('hidden');
        window.profHidden = true;
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
                            <video autoPlay className="index-video"> <source src={movie.big_video_url} type="video/mp4" /> </video> ))
                    }
                </div>
                <img src={window.spiderverse} className="spiderverse-logo" />
                <Link className="index-play" to="/movies/1">
                    <div className="index-play-items">
                        <strong class="material-icons">
                            play_arrow 
                        </strong>
                        Play
                    </div>
                </Link>
                <div className="mpaa-rating">
                    PG
                </div>
                <div className = "thumbs-container">
                    <h1 className="row-heading">Action</h1>
                    <ul className="movie-thumb-row">
                        {this.moviesAction.slice(0,5).map((movie) => (
                            <MovieThumb movie={movie}/>))
                        }
                        {this.moviesAction.slice(5,6).map((movie) => (
                            <MovieThumbLast movie={movie}/>))
                        }
                    </ul>
                    <h1 className="row-heading">Comedy</h1>
                    <ul className="movie-thumb-row">
                        {this.moviesComedy.slice(0,5).map((movie) => (
                            <MovieThumb movie={movie}/>))
                        }
                        {this.moviesComedy.slice(5,6).map((movie) => (
                            <MovieThumbLast movie={movie}/>))
                        }
                    </ul>
                    <h1 className="row-heading">Family</h1>
                    <ul className="movie-thumb-row">
                        {this.moviesFamily.slice(0,5).map((movie) => (
                            <MovieThumb movie={movie}/>))
                        }
                        {this.moviesFamily.slice(5,6).map((movie) => (
                            <MovieThumbLast movie={movie}/>))
                        }
                    </ul>
                    <h1 className="row-heading">Romance</h1>
                    <ul className="movie-thumb-row">
                        {this.moviesRomance.slice(0,5).map((movie) => (
                            <MovieThumb movie={movie}/>))
                        }
                        {this.moviesRomance.slice(5,6).map((movie) => (
                            <MovieThumbLast movie={movie}/>))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default MovieIndex
