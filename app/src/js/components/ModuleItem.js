/** @jsx React.DOM */
'use strict';
var React = require('react');


var ModuleItem = React.createClass({

  handleModuleView: function(){
    this.props.viewModule(this.props);
  },

  render: function() {

    return (
      <a ref="addedItem" href="#" onClick={this.handleModuleView} className="list-group-item list-group-item-action" key={this.props.key}>{this.props.name} <small> - {this.props.description}</small></a>
    );
  }

});

module.exports = ModuleItem;
