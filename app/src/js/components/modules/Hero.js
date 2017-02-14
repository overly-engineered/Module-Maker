/** @jsx React.DOM */
  'use strict';
  var React = require('react');


  var Hero = React.createClass({
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
      this.props.currentContent.image = 'c-aw-explore-1000-wines-hero';
      this.props.currentContent.bodyCopy = 'The French wines in our Cellar <br>come from a mixture of classic <br>and lesser known Chateaux.';
      this.props.editMade(this.props.currentContent);
    },
    componentDidMount: function(){
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
      }.bind(this);
    },
    render: function() {

      var moduleClass = 'hero';
      if(this.props.currentContent.color){
        moduleClass +='--light'
      }
      var contentClass = 'hero__content'
      
      if(this.props.currentContent.roundel){
        switch (this.props.currentContent.roundelType) {
          case 2:
            contentClass += ' roundel--saveValue';
          break;
          case 3:
            contentClass += ' roundel--saveValue--fraction';
          break;
          case 4:
            contentClass += ' roundel--double';
          case 5:
            contentClass += ' roundel--under';
            break;
          case 6:
            contentClass += ' roundel--percentOff';
          break;
          case 7:
            contentClass += ' roundel--multi';
          break;
          case 8:
            contentClass += ' roundel--green';
          break;
          case 9:
            contentClass += ' roundel--grey';
          break;
          case 10:
            contentClass += ' roundel--upto';
          break;
          default:
            contentClass += ' roundel';
          break;
        }

      }

      return (
        <div className="rowGrid">
          <div ref="row" className={moduleClass}>
            <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>
                <div className={contentClass} id="roundel" data-roundel={this.props.currentContent.dataRoundel} data-roundelamount={this.props.currentContent.dataRoundelAmount} data-roundeltop={this.props.currentContent.dataRoundelTop} data-roundelmiddle={this.props.currentContent.dataRoundelMiddle} data-roundelbottom={this.props.currentContent.dataRoundelBottom}>
                    <div className="hero__title">
                      <h2 dangerouslySetInnerHTML={this.createHeading()} />

                      <p dangerouslySetInnerHTML={this.createBody()} />

                      <p className="hero__cta">{this.props.currentContent.ctaDetails[0].ctaText}</p>
                    </div>
                </div>

              <div className="hero__image">
                <img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />
              </div>
            
            </a>
          </div>
        </div>
      );
    }

  });

  module.exports = Hero;