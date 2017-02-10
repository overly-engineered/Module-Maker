/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var ProductOfTheWeek = React.createClass({

    createHeading: function() {
      return {__html: this.props.currentContent.heading};
    },
    createBody: function(){
      return {__html: this.props.currentContent.bodyCopy};
    },
    createSideCopy: function(){
      return {__html: this.props.currentContent.subHeading};
    },
    componentDidMount: function(){
      this.props.currentContent.image = 'c-hp-p1-story1-chateaupoujeaux';
      this.props.editMade(this.props.currentContent);
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
      }.bind(this);
    },
    render: function() {

      var style={textAlign:'right', display:'block', lineHeight:'22px'};
      var styleTwo={fontWeight: 'bold !important', textDecoration: 'underline', display: 'block'};
      var styleThree={overflow:'auto'};
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
          <div className="col-sm-8 npl">

            <div ref="row" id="roundel" className={moduleClass} data-roundel={this.props.currentContent.dataRoundel} data-roundelamount={this.props.currentContent.dataRoundelAmount} data-roundeltop={this.props.currentContent.dataRoundelTop} data-roundelmiddle={this.props.currentContent.dataRoundelMiddle} data-roundelbottom={this.props.currentContent.dataRoundelBottom}>

                <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription}>

                    <div className="card__image">
                        
                        <img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />

                    </div>

                    <div className="card__text" style={styleThree}>
                        
                        <div className="module--row mb1">

                            <div className="module__col--9">

                                <h3 dangerouslySetInnerHTML={this.createHeading()} />

                                <p dangerouslySetInnerHTML={this.createBody()} />

                                <p style={styleTwo} className="mt1">{this.props.currentContent.ctaDetails[0].ctaText}</p>

                            </div>

                            <div className="module__col--3 mt1" style={style} dangerouslySetInnerHTML={this.createSideCopy()}/>

                        </div>

                    </div>
                
                </a>

            </div>

          </div>
        </div>
      );
    }

  });

  module.exports = ProductOfTheWeek;
