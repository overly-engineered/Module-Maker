/** @jsx React.DOM */
  'use strict';
  var React = require('react');


  var WhatsTrending = React.createClass({
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
      this.props.currentContent.image = 'g-im-seasonal';
      this.props.editMade(this.props.currentContent);
    },
    componentDidMount: function(){
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
      }.bind(this);
    },
    render: function() {

      var styles = {width:'200px', padding: '10px', margin:'10px', backgroundColor:'white'}

      var moduleClass = 'jl-section__panel';
      if(this.props.currentContent.roundel){
        switch (this.props.currentContent.roundelType) {
          case 2:
            moduleClass = 'jl-section__panel roundel--saveValue';
          break;
          case 3:
            moduleClass = 'jl-section__panel roundel--saveValue--fraction';
          break;
          case 4:
            moduleClass = 'jl-section__panel roundel--double';
          case 5:
            moduleClass = 'jl-section__panel roundel--under';
            break;
          case 6:
            moduleClass = 'jl-section__panel roundel--percentOff';
          break;
          case 7:
            moduleClass = 'jl-section__panel roundel--multi';
          break;
          case 8:
            moduleClass = 'jl-section__panel roundel--green';
          break;
          case 9:
            moduleClass = 'jl-section__panel roundel--grey';
          break;
          case 10:
            moduleClass = 'jl-section__panel roundel--upto';
          break;
          default:
            moduleClass = 'jl-section__panel roundel';
          break;
        }
      }

      return (
        <div className="rowGrid" style={styles}>
          <div className="mod-col">

            <div ref="row" id="roundel" className={moduleClass} data-roundel={this.props.currentContent.dataRoundel} data-roundelamount={this.props.currentContent.dataRoundelAmount} data-roundeltop={this.props.currentContent.dataRoundelTop} data-roundelmiddle={this.props.currentContent.dataRoundelMiddle} data-roundelbottom={this.props.currentContent.dataRoundelBottom}>

              <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>

                <div className="jl-section__panel__image">

                  <img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />

                </div>

                <div className="jl-section__panel__text">

                  <h3 dangerouslySetInnerHTML={this.createHeading()} />

                  <p dangerouslySetInnerHTML={this.createBody()} />

                  <p className="cta">{this.props.currentContent.ctaDetails[0].ctaText}</p>

                </div>

              </a>

            </div>

          </div>
        </div>
      );
    }

  });

  module.exports = WhatsTrending;
