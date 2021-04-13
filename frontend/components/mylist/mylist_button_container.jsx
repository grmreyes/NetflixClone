import { connect } from 'react-redux';
import { createListing,deleteListing } from '../../actions/list_actions';
import MyListButton from './mylist_button';

const mapStateToProps = (state,props) => {
    return {
      movieId: props.movieId,
      user: state.entities.users[state.session.id]
    };
  };

const mapDispatchToProps = dispatch => {
  return {
    createListing: (movieId,userId) => dispatch(createListing(movieId,userId)),
    deleteListing: (movieId,userId) => dispatch(deleteListing(movieId,userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListButton)
