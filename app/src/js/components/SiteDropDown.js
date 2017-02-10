/** @jsx React.DOM */
'use strict';
var React = require('react');


var SiteDropDown = React.createClass({

  handleSiteChange: function(){
    this.props.siteChange(this.props.key);
  },

  render: function() {

    return (
          <a onClick={this.handleSiteChange} className="dropdown-item" key={this.props.key}>{this.props.name}</a>
    );
  }

});

module.exports = SiteDropDown;
