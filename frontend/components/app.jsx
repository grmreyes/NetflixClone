import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import MovieIndexContainer from './movies/movie_index_container';
import Splash from './splash/splash';
import HeaderContainer from './header/header_container';
import MovieShowContainer from './movies/movie_show_container';
import SearchResultsContainer from './search/search_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <ProtectedRoute path = "/browse" component={HeaderContainer} />
    </header>
    <AuthRoute component={Splash} />
    <Switch>
      <ProtectedRoute path="/movies/:movieId" component={MovieShowContainer} />
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/browse" component={MovieIndexContainer} />
      <ProtectedRoute exact path="/browse/:searchTerm" component={SearchResultsContainer} />
    </Switch>
  </div>
);

export default App;
