import React, { Component } from 'react';
import fire from '../config/fire';
import SignIn from './SignIn';
import App from './App';
class Redirect extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: true });
      } else {
        this.setState({ user: false });
      }
    })
  }
  render() {
    return (
      <div className="Redirect">
        { this.state.user ? ( <App /> ) : ( <SignIn /> ) }
      </div>
    );
  }
}

export default Redirect;