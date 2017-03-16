/** @jsx React.DOM */
  'use strict';
  var React = require('react');


  var Card = React.createClass({

    resizeIFrameToFitContent: function( iFrame ) {

    },

    createHeading: function() {
      return {__html: this.props.currentContent.heading};
    },
    createBody: function(){
      return {__html: this.props.currentContent.bodyCopy};
    },
    componentWillMount: function(){
      if(!this.props.currentContent.savedState){
        this.props.currentContent.image = 'g-im-seasonal';
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
      
      var ctaClass = 'btn--primary';
      if(this.props.currentContent.ctaType == 1){
        ctaClass = 'btn';
      } else if(this.props.currentContent.ctaType == 2){
        ctaClass = 'btn--offers';
      } else if(this.props.currentContent.ctaType == 3){
        ctaClass = 'cta';
      }

      var moduleClass = 'card';
      if(this.props.currentContent.roundel){
        switch (this.props.currentContent.roundelType) {
          case 2:
            moduleClass = 'card roundel--saveValue';
          break;
          case 3:
            moduleClass = 'card roundel--saveValue--fraction';
          break;
          case 4:
            moduleClass = 'card roundel--double';
          case 5:
            moduleClass = 'card roundel--under';
            break;
          case 6:
            moduleClass = 'card roundel--percentOff';
          break;
          case 7:
            moduleClass = 'card roundel--multi';
          break;
          case 8:
            moduleClass = 'card roundel--green';
          break;
          case 9:
            moduleClass = 'card roundel--grey';
          break;
          case 10:
            moduleClass = 'card roundel--upto';
          break;
          default:
            moduleClass = 'card roundel';
          break;
        }
      }

      return (
        <div className="rowGrid">
          <div className={this.props.currentContent.currentColumnSize} ref="row">

            <div id="roundel" className={moduleClass} data-roundel={this.props.currentContent.dataRoundel} data-roundelamount={this.props.currentContent.dataRoundelAmount} data-roundeltop={this.props.currentContent.dataRoundelTop} data-roundelmiddle={this.props.currentContent.dataRoundelMiddle} data-roundelbottom={this.props.currentContent.dataRoundelBottom}>

              <div className="card__image">

                <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription} onclick="ga('send', 'event', 'Page', 'click', 'Row # | Card - Title');">
                  <img src={"https://s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} ref="image"/>
                </a>

              </div>

              <div className="card__text">

                <h3 dangerouslySetInnerHTML={this.createHeading()} />

                <p dangerouslySetInnerHTML={this.createBody()} />

                <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription} onclick="ga('send', 'event', 'Page', 'click', 'Row # | Card - Title');" className={ctaClass}>{this.props.currentContent.ctaDetails[0].ctaText}</a>

              </div>

            </div>

          </div>
        </div>
      );
    }

  });

  module.exports = Card;
