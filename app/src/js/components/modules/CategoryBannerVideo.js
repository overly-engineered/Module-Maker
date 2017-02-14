/** @jsx React.DOM */
  'use strict';
  var React = require('react'),
      TextLink = require('./TextLink');


  var CategoryBannerVideo = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },
    handleSlideDown(event) {
      var base = $(event.target).parent().parent().parent().parent();
      var video = $(base).find('.signpost__video');
      video[0].style.display = 'block';
      var subcopymore = $(base).find('.signpost__subcopy__more');
      subcopymore[0].style.display = 'block';
      var signpostreadmore = $(base).find('.signpost__readmore');
      signpostreadmore[0].className += ' signpost__readmore--display';
    },
    handleSlideUp(event) {
      var base = $(event.target).parent().parent().parent().parent();
      var video = $(base).find('.signpost__video');
      video[0].style.display = 'none';
      var subcopymore = $(base).find('.signpost__subcopy__more');
      subcopymore[0].style.display = 'none';
      var signpostreadmore = $(base).find('.signpost__readmore');
      signpostreadmore[0].className = ' signpost__readmore';
    },
    createBody: function(){
      return {__html: this.props.currentContent.bodyCopy};
    },
    createSubBody: function(){
      return {__html: this.props.currentContent.bodyCopyTwo}
    },
    createVideo: function(){
      return {__html: this.props.currentContent.videoCode}
    },
    componentWillMount: function(){
      this.props.currentContent.image = 'c-aw-food-wine-cb';
      this.props.currentContent.subHeading = 'Shop wine types';
      this.props.editMade(this.props.currentContent);
    },
    componentDidMount: function(){
      ;(function($){
  
        'use strict';

        $('.signpost--standard, .signpost--BigRoundel').each(function(){
          var base = $(this);
          $('.signpost__readmore', base).bind('click', function(){
            $('.signpost__video, .signpost__subcopy__more', base).slideToggle();
            $(this).toggleClass('signpost__readmore--display');
          });
        });

      })(jQuery);
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
      var style = {display: 'none'}
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

            <div className="mod-col signpost__subcopy">
              <p dangerouslySetInnerHTML={this.createBody()} />

              <div className="signpost__subcopy__more" >
                <p dangerouslySetInnerHTML={this.createSubBody()}/>
              </div>
              <div className="signpost__readmore">
                <span className="signpost__readmore--close" onClick={this.handleSlideUp}>Close</span>
                <span className="signpost__readmore--open" onClick={this.handleSlideDown}>Click here to read more...</span>
                <span className="signpost__toggleIcon" onClick={this.handleSlideDown}></span>
              </div>
            </div>
            <div className="mod-col">
              <div className="signpost__video" onClick={this.handleClick}>
                  
                    <img src={this.props.currentContent.videoThumbnail} width="295" height="166" className="videoThumb" />
                    <span className="videoThumb"></span>
                
                    <div className="videoOverlay" style={style} itemProp="video" itemScope itemType="http://schema.org/VideoObject" >
                      
                      <div dangerouslySetInnerHTML={this.createVideo()}/>

                      <div>Close</div>

                    </div>

              </div>
              <div className="signpost__linklist">
                <span className="title">{this.props.currentContent.subHeading}</span>
                <ul>{linklist}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }

  });

  module.exports = CategoryBannerVideo;
