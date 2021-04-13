import {connect} from 'react-redux';
import {fetchMovies} from '../../actions/movie_actions';
import {selectMovies} from '../../reducers/selectors';
import {fetchList} from '../../actions/list_actions';
import MovieIndex from './movie_index';


const mapStateToProps = state => ({
  movies: selectMovies(state),
  userId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchList: (list) => dispatch(fetchList(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)