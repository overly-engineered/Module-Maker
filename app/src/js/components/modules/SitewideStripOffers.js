/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var SitewideStripOffers = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createHeading: function() {
      return {__html: this.props.currentContent.heading};
    },
    componentDidMount: function(){
      this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
    },
    render: function() {
      var styles = {
        textAlign: 'center',
        height:'40px'
      }
      var offerStyle = {
        backgroundColor: '#c0002b;'
      }
      

      return (
        <section className="notificationBar" id="deliveryFreeBar" style={offerStyle}>
            <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription} >
              <p ref="row" style={styles} dangerouslySetInnerHTML={this.createHeading()}/>
            </a>
        </section>
      );
    }

  });

  module.exports = SitewideStripOffers;
