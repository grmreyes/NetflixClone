import React from 'react';
import { Link } from 'react-router-dom';
import MovieThumb from '../movies/movie_thumb'
import MovieThumbLast from '../movies/movie_thumb_last'



class SearchResults extends React.Component{
    componentDidMount(){
        this.props.fetchMovies()
        window.scrollTo(0, 0);
    }



    render(){
        function searchMatch(movie,searchTerm,list){
            //trim search term
            
            let trimmed = searchTerm.replaceAll(/\s/g, "");
            trimmed = trimmed.replaceAll("-", "");
            trimmed = trimmed.replaceAll("'", "");
            trimmed = trimmed.replaceAll(":", "");
            trimmed = trimmed.toLowerCase();
            //trim movie title
            let trimTitle = movie.title.replaceAll(/\s/g, "");
            trimTitle = trimTitle.replaceAll("-", "");
            trimTitle = trimTitle.replaceAll("'", "");
            trimTitle = trimTitle.replaceAll(":", "");
            trimTitle = trimTitle.toLowerCase();
            //lowercase description
            let lowerDescription = movie.description.toLowerCase()

            //mylist
            if(trimmed==='mylist'){
                if(Object.values(list).includes(movie.id)){
                    return true;
                }
            }
            //match with genre 1
            if(movie.genres[0].name.toLowerCase()===trimmed){
                return true;
            }
            //match with genre 2
            else if(movie.genres.length>1){
                if(movie.genres[1].name.toLowerCase()===trimmed){
                    return true;
                }
            }
            //match with title
            if (trimTitle.match(trimmed)!=null){
                return true;
            }
            //match with description
            else if (lowerDescription.match(trimmed)){
                return true;
            }
            return false;
        }
        
        this.searchedMovies = [];
        this.searchTerm = this.props.searchTerm
        this.list = this.props.list
        this.props.movies.forEach(movie =>{
            if(searchMatch(movie,this.searchTerm,this.list)===true){
                this.searchedMovies.push(movie);
            }
        })
        return(
            
            <div className="search-movie-index">
                
                <div className = "search-thumbs-container">
                <h1 className="search-row-heading">Search Results</h1>
                    <ul className="movie-thumb-row">
                        {this.searchedMovies.length<1? 'No results found.': ''}
                        {this.searchedMovies.slice(0,5).map((movie) => (
                            <MovieThumb genre="mylist" movie={movie}/>))
                        }
                        {this.searchedMovies.slice(5,6).map((movie) => (
                            <MovieThumbLast genre="mylist" movie={movie}/>))
                        }
                    </ul>
                    <ul className="movie-thumb-row">
                        {this.searchedMovies.slice(6,11).map((movie) => (
                            <MovieThumb genre="mylist" movie={movie}/>))
                        }
                        {this.searchedMovies.slice(11,12).map((movie) => (
                            <MovieThumbLast genre="mylist" movie={movie}/>))
                        }
                    </ul>
                    <ul className="movie-thumb-row">
                        {this.searchedMovies.slice(12,17).map((movie) => (
                            <MovieThumb genre="mylist" movie={movie}/>))
                        }
                        {this.searchedMovies.slice(17,18).map((movie) => (
                            <MovieThumbLast genre="mylist" movie={movie}/>))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchResults
