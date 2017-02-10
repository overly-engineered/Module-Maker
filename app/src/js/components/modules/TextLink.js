/** @jsx React.DOM */
  'use strict';
  var React = require('react');


  var TextLink = React.createClass({

    render: function() {
      return (
        <a href={this.props.individualLinkContent.ctaLink} onClick={this.props.handleClick} title={this.props.individualLinkContent.ctaDescription} onclick="ga('send', 'event', 'Page', 'click', 'Row # | Card - Title');" key={this.props.key}>{this.props.individualLinkContent.ctaText}</a>
      );
    }

  });

  module.exports = TextLink;
