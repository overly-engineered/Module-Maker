/** @jsx React.DOM */
  'use strict';
  var React = require('react');


  var TextLink = React.createClass({

    render: function() {
      if(this.props.currentSite == 3){
        var ctaClass = 'btn--brand btn--full';
      } else {
        var ctaClass = 'btn--primary btn--full';
      }
      
      if(this.props.currentContent.ctaType == 1){
        ctaClass = 'btn btn--full';
      } else if(this.props.currentContent.ctaType == 2){
        ctaClass = 'btn--offers btn--full';
      } else if(this.props.currentContent.ctaType == 3){
        ctaClass = 'hero__cta';
      }
      return (
        <a href={this.props.individualLinkContent.ctaLink} className={ctaClass} onClick={this.props.handleClick} title={this.props.individualLinkContent.ctaDescription} onclick="ga('send', 'event', 'Page', 'click', 'Row # | Card - Title');" key={this.props.key}>{this.props.individualLinkContent.ctaText}</a>
      );
    }

  });

  module.exports = TextLink;
