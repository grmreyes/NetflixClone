import React from 'react';
import {
    Link,
  } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return (
      <div>
        <h1>Netflix</h1>
        <Link to="/signin">Sign in</Link>
      </div>
    );
  }
}

export default Splash;
