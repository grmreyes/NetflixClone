import * as APIUtil from '../util/list_api_util';

export const RECEIVE_LIST = 'RECEIVE_LIST';



const receiveList = list => ({
  type: RECEIVE_LIST,
  list,
});




export const fetchList = (movieId,userId) => dispatch => (
    APIUtil.fetchList(movieId,userId).then(list => (
      dispatch(receiveList(list))
    ))
  );

  export const createListing = (movieId,userId) => dispatch => (
    APIUtil.createListing(movieId,userId).then(list => (
      dispatch(fetchList(list))
    ))
  );
  
  export const deleteListing = (movieId,userId) => dispatch => (
    APIUtil.deleteListing(movieId,userId).then(list => (
        dispatch(fetchList(list))
    ))
  );