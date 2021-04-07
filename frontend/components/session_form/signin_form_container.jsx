import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signin,deleteErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    formType: 'Sign In',
    question: 'New to Nicflix?  ',
    navLink: <Link className="question-link" to="/signup">Sign up now.</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signin(user)),
    deleteErrors: () => dispatch(deleteErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
