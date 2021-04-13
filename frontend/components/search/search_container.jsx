import {connect} from 'react-redux';
import {fetchMovies} from '../../actions/movie_actions';
import {selectMovies} from '../../reducers/selectors';
import SearchResults from './search';


const mapStateToProps = (state, { match }) => {
    const searchTerm = match.params.searchTerm;
    return {
        searchTerm,
        movies: selectMovies(state),
        list: state.entities.list
    };
  };

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)