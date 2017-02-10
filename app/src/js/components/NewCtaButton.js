/** @jsx React.DOM */
'use strict';
var React = require('react');


var NewCtaButton = React.createClass({

  render: function() {
    return (
      <a onClick={this.props.addCta} className="btn btn-success btn-lg btn-block">Add CTA</a>
    );
  }

});

module.exports = NewCtaButton;
