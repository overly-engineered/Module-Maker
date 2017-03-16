/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var ArticleTMG = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createBody: function() {
      return {__html: this.props.currentContent.bodyCopy};
    },
    componentWillMount: function(){
      if(!this.props.currentContent.savedState){
        this.props.currentContent.image = '848779-nyetimber-2';
        this.props.currentContent.heading = 'Rosé is on a roll';
        this.props.currentContent.subHeading = 'From pale ballet-pump pink to candy cane crimson';
        this.props.editMade(this.props.currentContent);
      } else {
        this.props.currentContent.savedState = false;
      }
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

            <div className="col-xs-12 col-sm-8">

              <div className="article">

              <div className="article__text">
                
                <h2 className="section__title">{this.props.currentContent.heading}</h2>

                <p className="article__title"><h2>{this.props.currentContent.subHeading}</h2></p>

                <div className="article__text">

                  <p dangerouslySetInnerHTML={this.createBody()}/>
                  
                  <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription} onclick="ga('send', 'event', 'Page', 'click', 'Row # | Card - Title');" className="article__cta">{this.props.currentContent.ctaDetails[0].ctaText}</a>

                </div>

              </div>
                
            </div>

          </div>

          <div className="col-xs-12 col-sm-4">

            <div className="fill-bootstrap-col" ref="row">
              <img ref="image" src={"https://s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />
            </div>

          </div>

        </div>
      );
    }

  });

  module.exports = ArticleTMG;
