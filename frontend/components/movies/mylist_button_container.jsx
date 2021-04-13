import { connect } from 'react-redux';
import { fetchList,createListing,deleteListing } from '../../actions/list_actions';
import MyListButton from './mylist_button';

const mapStateToProps = (state) => {
  return {
    list: state.entities.list,
    userId: state.session.id
  };
};



const mapDispatchToProps = dispatch => ({
    fetchList: (list) => dispatch(fetchList(list)),
    createListing: (movieId,userId) => dispatch(createListing(movieId,userId)),
    deleteListing: (listId,userId) => dispatch(deleteListing(listId,userId)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyListButton);
