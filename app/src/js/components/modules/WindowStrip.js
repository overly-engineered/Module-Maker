/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var WindowStrip = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createHeading: function() {
      return {__html: this.props.currentContent.heading};
    },
    componentWillMount: function(){
      if(!this.props.currentContent.savedState){
        this.props.currentContent.image = 'k-sk-food-preparation';
        this.props.currentContent.currentColumnSize = 'col-xs-4';
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
      var moduleClass = 'window--strip';
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

          <div className={this.props.currentContent.currentColumnSize}>

            <div ref="row" className={moduleClass} id="roundel" className={moduleClass} data-roundel={this.props.currentContent.dataRoundel} data-roundelamount={this.props.currentContent.dataRoundelAmount} data-roundeltop={this.props.currentContent.dataRoundelTop} data-roundelmiddle={this.props.currentContent.dataRoundelMiddle} data-roundelbottom={this.props.currentContent.dataRoundelBottom}>

              <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>
                
                <img ref="image" src={"https://s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />

                <p>{this.props.currentContent.heading}</p>

              </a>

            </div>

          </div>

        </div>
      );
    }

  });

  module.exports = WindowStrip;
