/** @jsx React.DOM */
  'use strict';
  var React = require('react');


  var PanelReveal = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createHeading: function() {
      return {__html: this.props.currentContent.heading};
    },
    createBody: function(){
      return {__html: this.props.currentContent.bodyCopy};
    },
    componentDidMount: function(){
      this.props.currentContent.image = 'c-of-red-pod';
      this.props.editMade(this.props.currentContent);
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
      }.bind(this);
    },
    componentDidUpdate: function(){
      this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
    },
    render: function() {
      var contentStyle = {
        height: '305px'
      }

      return (
        <div className="rowGrid" style={contentStyle}>
          <div className={this.props.currentContent.currentColumnSize}>
            <div ref="row" className="panel--reveal">

            <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>

              <div className="panel__text">
                <h4 dangerouslySetInnerHTML={this.createHeading()} />
              </div>

              <div className="panel__reveal">

                <div className="panel__text--reveal">
                  <p dangerouslySetInnerHTML={this.createBody()}/>
                  
                  <p className="panel__text__cta">{this.props.currentContent.ctaDetails[0].ctaText}</p>
                </div>

              </div>

              <div className="panel__image">
                  <img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />
              </div>

            </a>

          </div>
        </div>
      </div>
      );
    }

  });

  module.exports = PanelReveal;
