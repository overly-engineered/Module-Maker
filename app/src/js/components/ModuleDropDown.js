/** @jsx React.DOM */
'use strict';
var React = require('react');


var ModuleDropDown = React.createClass({

  handleModuleView: function(){
    this.props.viewModule(this.props);
  },

  render: function() {

    return (
          <a onClick={this.handleModuleView} className="dropdown-item" key={this.props.key}>{this.props.name}</a>
    );
  }

});

module.exports = ModuleDropDown;
