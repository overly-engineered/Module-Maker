/** @jsx React.DOM */
  'use strict';
  var React = require('react');


  var PanelCentral = React.createClass({
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
    componentWillMount: function(){
      if(!this.props.currentContent.savedState){
        this.props.currentContent.image = 'f-au-nav-purple';
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
            <div ref="row" className="panel--central">

            <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>

              <div className="panel__image">
                  <img ref="image" src={"https://s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />
              </div>

              <div className="panel__text">
                <h4 dangerouslySetInnerHTML={this.createHeading()} />
                <p dangerouslySetInnerHTML={this.createBody()}/>
                <p className="cta">{this.props.currentContent.ctaDetails[0].ctaText}</p>
              </div>

            </a>

          </div>
        </div>
      </div>
      );
    }

  });

  module.exports = PanelCentral;
