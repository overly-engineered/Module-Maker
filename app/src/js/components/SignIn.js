/** @jsx React.DOM */
'use strict';
var React = require('react'),
HomeButton = require('./HomeButton'),
ModuleDropDown = require('./ModuleDropDown'),
SiteDropDown = require('./SiteDropDown');
 
 

var SignIn = React.createClass({
  handleLogIn: function(e){
    this.props.signIn();
  },
  render: function() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="LogInEmail">Email address</label>
          <input type="email" className="form-control" id="LogInEmail" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">Your Waitrose Email Address</small>
        </div>
        <div className="form-group">
          <label htmlFor="LoginPassword">Password</label>
          <input type="password" className="form-control" id="LoginPassword" placeholder="Password" />
        </div>
        <div onClick={this.handleLogIn} className="btn btn-primary">Submit</div>
      </form>
    );
  }

});

module.exports = SignIn;
