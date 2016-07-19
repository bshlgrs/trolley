import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Horizon from '../horizon-container';
import Login from "./login.js"

export default class Menu extends Component {

  logout = (e) =>  {
    e.preventDefault();
    Horizon.clearAuthTokens();
    this.context.router.push("/")
  }

  render() {
    // var menu = Horizon.get().hasAuthToken()
    //   ?   <div className={'menu'}>
    //       <IndexLink to="/" className={'menu-option'} activeClassName="active">Home</IndexLink>
    //       <Link to="/messages" className={'menu-option'} activeClassName="active">Messages</Link>
    //       <a href="#" className={'menu-option'} onClick={this.logout}>Logout</a>
    //     </div>
    //   :   <div className={'menu'}>
    //       <IndexLink to="/" className={'menu-option'} activeClassName="active">Home</IndexLink>
    //       <Link to="/login" className={'menu-option'} activeClassName="active">Login</Link>
    //     </div>;

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div id="navbar" className="navbar-collapse collapse">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Trolley</a>
            </div>
            { Horizon.get().hasAuthToken() &&
              <ul className="nav navbar-nav navbar-right">
                <li><IndexLink to="/" className={'menu-option'} activeClassName="active">Home</IndexLink></li>
                <li><Link to="/messages" className={'menu-option'} activeClassName="active">Messages</Link></li>
                <li><a href="#" className={'menu-option'} onClick={this.logout}>Logout {this.props.user}</a></li>
              </ul>
            }
          </div>
        </div>
      </nav>
    )
  }
}

Menu.contextTypes = {
  router: React.PropTypes.object
};
