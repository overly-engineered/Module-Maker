/** @jsx React.DOM */
  'use strict';
  var React = require('react');


  var Feature = React.createClass({
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
      this.props.currentContent.image = 'c-of-mywaitrose-banner';
      this.props.editMade(this.props.currentContent);
    },
    componentDidMount: function(){
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
      }.bind(this);
    },
    render: function() {

      var moduleClass = 'feature';
      if(this.props.currentContent.color){
        moduleClass +='--light'
      }
      
      var ctaClass = 'btn--primary';
      if(this.props.currentContent.ctaType == 1){
        ctaClass = 'btn';
      } else if(this.props.currentContent.ctaType == 2){
        ctaClass = 'btn--offers';
      } else if(this.props.currentContent.ctaType == 3){
        ctaClass = 'cta';
      }

      if(this.props.currentContent.roundel){
        switch (this.props.currentContent.roundelType) {
          case 2:
            moduleClass += ' roundel--saveValue';
          break;
          case 3:
            moduleClass += ' roundel--saveValue--fraction';
          break;
          case 4:
            moduleClass += ' roundel--double';
          case 5:
            moduleClass += ' roundel--under';
            break;
          case 6:
            moduleClass += ' roundel--percentOff';
          break;
          case 7:
            moduleClass += ' roundel--multi';
          break;
          case 8:
            moduleClass += ' roundel--green';
          break;
          case 9:
            moduleClass += ' roundel--grey';
          break;
          case 10:
            moduleClass += ' roundel--upto';
          break;
          default:
            moduleClass += ' roundel';
          break;
        }

      }

      return (
        <div className="rowGrid">
          <div ref="row" className="col-xs-12">

          	<a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>

          		<div id="roundel" className={moduleClass} data-roundel={this.props.currentContent.dataRoundel} data-roundelamount={this.props.currentContent.dataRoundelAmount} data-roundeltop={this.props.currentContent.dataRoundelTop} data-roundelmiddle={this.props.currentContent.dataRoundelMiddle} data-roundelbottom={this.props.currentContent.dataRoundelBottom}>

          			<div className="feature__text">

          				<h3 dangerouslySetInnerHTML={this.createHeading()} />

                  <p dangerouslySetInnerHTML={this.createBody()} />

          				<p className={ctaClass}>{this.props.currentContent.ctaDetails[0].ctaText}</p>

          			</div>

          			<div className="feature__image" roundel="">

          				<img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />

          			</div>

          		</div>

          	</a>

          </div>
        </div>
      );
    }

  });

  module.exports = Feature;
