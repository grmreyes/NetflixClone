import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup,deleteErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    formType: 'Sign Up',
    question: 'Already have an account?',
    navLink: <Link to="/signin">Sign in instead.</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    deleteErrors: () => dispatch(deleteErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
