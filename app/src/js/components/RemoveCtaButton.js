/** @jsx React.DOM */
'use strict';
var React = require('react');


var RemoveCtaButton = React.createClass({

  render: function() {
    return (
      <a onClick={this.props.removeCta} className="btn btn-danger btn-lg btn-block">Remove CTA</a>
    );
  }

});

module.exports = RemoveCtaButton;
