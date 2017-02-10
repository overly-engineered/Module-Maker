/** @jsx React.DOM */
  'use strict';
  var React = require('react'),
      TextLink = require('./TextLink');


  var CategoryBannerTwoColumn = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createBody: function(){
      return {__html: this.props.currentContent.bodyCopy};
    },
    componentDidMount: function(){
      this.props.currentContent.image = 'c-aw-food-wine-cb';
      this.props.currentContent.subHeading = 'Shop wine types';
      this.props.editMade(this.props.currentContent);
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
      }.bind(this);
    },
    componentWillUnmount: function(){
      this.props.resetCta();
    },
    render: function() {
      var moduleClass = 'signpost--standard';
      var lightClass = 'signpost__head';
      if(this.props.currentContent.color){
        lightClass +='--dark'
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

      var linklist = this.props.currentContent.ctaDetails.map(function(item) {
      return <li key={item.id}><TextLink key={item.id}
                        individualLinkContent={item}
                        currentContent={this.props.currentContent}
                        editMade={this.props.editMade} /></li>
      
      }.bind(this))
      return (
        <div className="rowGrid">
          <div ref="row" id="roundel" className={moduleClass} data-roundel={this.props.currentContent.dataRoundel} data-roundelamount={this.props.currentContent.dataRoundelAmount} data-roundeltop={this.props.currentContent.dataRoundelTop} data-roundelmiddle={this.props.currentContent.dataRoundelMiddle} data-roundelbottom={this.props.currentContent.dataRoundelBottom}>
            <div className={lightClass}>
              <div className="signpost__title">
                <h1>{this.props.currentContent.heading}</h1>
                <span className="roundel"></span>
              </div>
              <div className="signpost__image">
                <img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />
              </div>
            </div>
            <div className="signpost__body">
              <div className="signpost__subcopy mod-col" dangerouslySetInnerHTML={this.createBody()}/>
              <div className="mod-col">
                <div className="signpost__linklist">
                  <span className="title">{this.props.currentContent.subHeading}</span>
                  <ul>
                  {linklist}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  });

  module.exports = CategoryBannerTwoColumn;
