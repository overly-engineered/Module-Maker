/** @jsx React.DOM */
var React = require('react'),
    ModuleMaker = require('./components/ModuleMaker');

React.renderComponent(
  <ModuleMaker />,
  document.getElementById('app')
);
