import { connect } from 'react-redux';
import { fetchList,createListing,deleteListing } from '../../actions/list_actions';
import MyListButton from './mylist_button';

const mapStateToProps = (state,ownProps) => {
  return {
    list: state.entities.list,
    userId: state.session.id,
    movieId: parseInt(ownProps.movieId)
  };
};



const mapDispatchToProps = dispatch => ({
    fetchList: (list) => dispatch(fetchList(list)),
    createListing: (data) => dispatch(createListing(data)),
    deleteListing: (data) => dispatch(deleteListing(data)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyListButton);
