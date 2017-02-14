/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var MenuPanelCellar = React.createClass({
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
    createCta: function(){
      return {__html: this.props.currentContent.ctaDetails[0].ctaText};
    },
    componentWillMount: function(){
      if(this.props.currentSite == 0){
        this.props.currentContent.image = 'c-mm-p1-aw-winterwarmers';
      } else {
        this.props.currentContent.image = 'g-mm-allgifts-valentines';
      }
      this.props.editMade(this.props.currentContent);
    },
    componentDidMount: function(){
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
      }.bind(this);
    },
    componentDidUpdate: function(){
      if(this.props.currentSite == 0){
        this.props.currentContent.image = 'c-mm-p1-aw-winterwarmers';
      } else {
        this.props.currentContent.image = 'g-mm-allgifts-valentines';
      }
      this.props.editMade(this.props.currentContent);
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
      }.bind(this);
    },
    render: function() {
      var contentStyle = {
        lineHeight: '48px'
      }
      var moduleClass = 'menu-panel';
      if(this.props.currentContent.color){
        moduleClass +='--light'
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
        }
      }
      var html = '';
      if(this.props.currentSite == 0){
        html = <div ref="row" className="tab__flyout__panel">
                      <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>
                          <h3 style={contentStyle}>{this.props.currentContent.heading}</h3>
                          <img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />
                      </a>
                </div>;
      } else {
        html = <div ref="row" id="roundel" className={moduleClass} data-roundel={this.props.currentContent.dataRoundel} data-roundelamount={this.props.currentContent.dataRoundelAmount} data-roundeltop={this.props.currentContent.dataRoundelTop} data-roundelmiddle={this.props.currentContent.dataRoundelMiddle} data-roundelbottom={this.props.currentContent.dataRoundelBottom}>
                    <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>
                        <div className="menu-panel__text">
                            <p className="title"dangerouslySetInnerHTML={this.createHeading()} />
                            <p dangerouslySetInnerHTML={this.createBody()}/>
                        </div>
                        <p className="menu-panel__text__cta" dangerouslySetInnerHTML={this.createCta()}/>
                        <div className="menu-panel__image">
                            <img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />
                        </div>
                        
                    </a>
                </div>;
      }
      return (
        <div className="rowGrid">
          {html}
        </div>
      );
    }

  });

  module.exports = MenuPanelCellar;
