/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var WindowGreen = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createHeading: function() {
      return {__html: this.props.currentContent.heading};
    },
    componentWillMount: function(){
      this.props.currentContent.image = 'c-mcg-luxury-gifts';
      this.props.currentContent.currentColumnSize = 'col-xs-6';
      this.props.editMade(this.props.currentContent);
    },
    componentDidMount: function(){
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
      }.bind(this);
    },
    componentDidUpdate: function(){
      this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
    },
    render: function() {

      return (
        <div className="rowGrid">

          <div className={this.props.currentContent.currentColumnSize}>

            <div ref="row" className="window--promo">

              <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>
                
                <img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />

                <p>{this.props.currentContent.heading}</p>

              </a>

            </div>

          </div>

        </div>
      );
    }

  });

  module.exports = WindowGreen;
