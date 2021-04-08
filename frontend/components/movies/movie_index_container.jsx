import {connect} from 'react-redux';
import {fetchMovies} from '../../actions/movie_actions';
import {selectMovies} from '../../reducers/selectors';
import MovieIndex from './movie_index';


const mapStateToProps = state => ({
  movies: selectMovies(state),
})

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)