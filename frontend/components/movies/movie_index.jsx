import React from 'react';
import { Link } from 'react-router-dom';
import MovieThumb from './movie_thumb'
import MovieThumbLast from './movie_thumb_last'



class MovieIndex extends React.Component{
    componentDidMount(){
        this.props.fetchMovies()    
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
                <h1>Action</h1>
                <ul className="movie-thumb-row">
                    {this.moviesAction.slice(0,5).map((movie) => (
                        <MovieThumb movie={movie}/>))
                    }
                    {this.moviesAction.slice(5,6).map((movie) => (
                        <MovieThumbLast movie={movie}/>))
                    }
                </ul>
                <h1>Comedy</h1>
                <ul className="movie-thumb-row">
                    {this.moviesComedy.slice(0,5).map((movie) => (
                        <MovieThumb movie={movie}/>))
                    }
                    {this.moviesComedy.slice(5,6).map((movie) => (
                        <MovieThumbLast movie={movie}/>))
                    }
                </ul>
                <h1>Family</h1>
                <ul className="movie-thumb-row">
                    {this.moviesFamily.slice(0,5).map((movie) => (
                        <MovieThumb movie={movie}/>))
                    }
                    {this.moviesFamily.slice(5,6).map((movie) => (
                        <MovieThumbLast movie={movie}/>))
                    }
                </ul>
                <h1>Romance</h1>
                <ul className="movie-thumb-row">
                    {this.moviesRomance.slice(0,5).map((movie) => (
                        <MovieThumb movie={movie}/>))
                    }
                    {this.moviesRomance.slice(5,6).map((movie) => (
                        <MovieThumbLast movie={movie}/>))
                    }
                </ul>
            </div>
        )
    }
}

export default MovieIndex
