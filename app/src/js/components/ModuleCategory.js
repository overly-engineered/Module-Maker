/** @jsx React.DOM */
'use strict';
var React = require('react');


var ModuleCategory = React.createClass({

  handleModuleView: function(){
    this.props.viewSubMenu(this.props);
  },

  render: function() {
    return (
      <a href="#" onClick={this.handleModuleView} className="list-group-item list-group-item-action categoryItem" key={this.props.key}>{this.props.name} <small> - {this.props.description}</small></a>
    );
  }

});

module.exports = ModuleCategory;
