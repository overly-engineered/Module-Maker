/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var Article = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createBody: function() {
      return {__html: this.props.currentContent.bodyCopy};
    },
    componentWillMount: function(){
      this.props.currentContent.image = '848779-nyetimber-2';
      this.props.editMade(this.props.currentContent);
    },
    componentDidMount: function(){
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.image.getDOMNode().clientHeight)
      }.bind(this);
    },
    componentDidUpdate: function(){
      this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
    },
    render: function() {

      return (
        <div className="rowGrid article">

            <div className="col-sm-4" ref="row">

              <img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />

            </div>

            <div className="col-sm-8">

              <div className="article">

              <div className="article__text">
                
                <h2>{this.props.currentContent.heading}</h2>

                  <p dangerouslySetInnerHTML={this.createBody()}/>

                  <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription} onclick="ga('send', 'event', 'Page', 'click', 'Row # | Card - Title');" className="btn--primary">{this.props.currentContent.ctaDetails[0].ctaText}</a>

              </div>
                
            </div>

          </div>

        </div>
      );
    }

  });

  module.exports = Article;
