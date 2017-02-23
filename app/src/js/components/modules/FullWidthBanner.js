/** @jsx React.DOM */
  'use strict';
  var React = require('react');


  var Interrupter = React.createClass({
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
      this.props.currentContent.image = 'k-sk-cbgfeature';
      this.props.currentContent.bodyCopy = 'Shop by coffee preference, lifestyle and learn all you need  to know about coffee machines with our buying guide.';
      this.props.editMade(this.props.currentContent);
    },
    componentDidMount: function(){
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
      }.bind(this);
    },
    render: function() {

      var moduleClass = 'hero--interrupter';
      if(this.props.currentContent.color){
        moduleClass +=' hero--light'
      }
      var contentClass = 'hero__content'
      var ctaClass = 'btn--primary';
      if(this.props.currentContent.ctaType == 1){
        ctaClass = 'btn';
      } else if(this.props.currentContent.ctaType == 2){
        ctaClass = 'btn--offers';
      } else if(this.props.currentContent.ctaType == 3){
        ctaClass = 'hero__cta';
      }
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

                <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription} onclick="ga('send', 'event', 'Page', 'click', 'Row # | Card - Title');">

                    <div className="hero__content">

                        <div className="hero__title mt2">

                            <h3 dangerouslySetInnerHTML={this.createHeading()} />

                            <p dangerouslySetInnerHTML={this.createBody()} />

                            <p className={ctaClass}>{this.props.currentContent.ctaDetails[0].ctaText}</p>

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

  module.exports = Interrupter;