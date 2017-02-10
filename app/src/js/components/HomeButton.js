/** @jsx React.DOM */
'use strict';
var React = require('react');


var HomeButton = React.createClass({
  render: function() {
    return (
      <a href="#" onClick={this.props.viewMenu} className="btn btn-primary">Home</a>
    );
  }

});

module.exports = HomeButton;
