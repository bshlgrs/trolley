import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './menu';

export default class MainLayout extends Component {

	render() {
		return (
			<div className="container">
        <Menu user={this.props.user}/>
      	<div className="row">
      	  <div className="col-sm-10 col-sm-offset-1">
      			{this.props.children}
          </div>
        </div>
      </div>
		);
	}
}
