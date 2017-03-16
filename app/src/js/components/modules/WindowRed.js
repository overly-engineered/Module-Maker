/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var WindowRed = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createHeading: function() {
      return {__html: this.props.currentContent.heading};
    },
    componentWillMount: function(){
      if(!this.props.currentContent.savedState){
        this.props.currentContent.image = 'c-mcg-foodwine-gifts';
        this.props.currentContent.currentColumnSize = 'col-xs-6';
        this.props.editMade(this.props.currentContent);
      } else {
        this.props.currentContent.savedState = false;
      }
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

            <div ref="row" className="window--promo--offer">

              <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>
                
                <img ref="image" src={"https://s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />

                <p>{this.props.currentContent.heading}</p>

              </a>

            </div>

          </div>

        </div>
      );
    }

  });

  module.exports = WindowRed;
