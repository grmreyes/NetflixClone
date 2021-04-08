export const selectMovie = ({ movies }, movieId) => {
    return movies[movieId];
  };
  
  export const selectMovies = (state) => (
    Object.values(state.entities.movies)
  );
  