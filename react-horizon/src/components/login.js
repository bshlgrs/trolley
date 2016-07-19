import React, { Component } from 'react';
import Horizon from '../horizon-container'
import Menu from "./menu.js"

const _horizon = Horizon.get();

export default class Login extends Component {

  handleAuth = () => {
    _horizon.authEndpoint('facebook').subscribe((endpoint) => {
      window.location.pathname = endpoint;
    });
  };

  render() {
    return (
      <div className="container">
        <Menu user={null}/>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="jumbotron">
              <h1>Got ninety-nine trolley problems?</h1>
              <p>this is where to find love then</p>
              <a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.handleAuth}>Log in with Facebook!</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
