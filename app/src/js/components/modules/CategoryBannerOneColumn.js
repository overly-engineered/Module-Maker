/** @jsx React.DOM */
  'use strict';
  var React = require('react');


  var CategoryBannerOneColumn = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createBody: function(){
      return {__html: this.props.currentContent.bodyCopy};
    },
    componentWillMount: function(){
      if(!this.props.currentContent.savedState){
        this.props.currentContent.image = 'c-aw-food-wine-cb';
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
    render: function() {
      var moduleClass = 'signpost';
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

      return (
        <div className="rowGrid">
          <div id="roundel" ref="row" className={moduleClass} data-roundel={this.props.currentContent.dataRoundel} data-roundelamount={this.props.currentContent.dataRoundelAmount} data-roundeltop={this.props.currentContent.dataRoundelTop} data-roundelmiddle={this.props.currentContent.dataRoundelMiddle} data-roundelbottom={this.props.currentContent.dataRoundelBottom}>
            <div className={lightClass}>
              <div className="signpost__title">
                <h1>{this.props.currentContent.heading}</h1>
                <span className="roundel"></span>
              </div>
              <div className="signpost__image">
                <img ref="image" src={"https://s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />
              </div>
            </div>
            <div className="signpost__body">
              <div className="signpost__subcopy" dangerouslySetInnerHTML={this.createBody()}/>
            </div>
          </div>
        </div>
      );
    }

  });

  module.exports = CategoryBannerOneColumn;
