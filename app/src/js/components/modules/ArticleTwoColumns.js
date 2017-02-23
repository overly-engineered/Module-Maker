/** @jsx React.DOM */
  'use strict';
  var React = require('react');

  var ArticleTwoColumns = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },

    createBody: function() {
      return {__html: this.props.currentContent.bodyCopy};
    },
    componentWillMount: function(){
      this.props.currentContent.image = '848779-nyetimber-2';
      this.props.currentContent.bodyCopy = 'Lorem ipsum Do dolore aliqua veniam dolor irure sint veniam reprehenderit Ut fugiat occaecat ad cupidatat aliqua commodo cupidatat dolore Duis Duis Excepteur aliqua sint aute qui commodo Duis magna Duis elit occaecat sunt veniam adipisicing do dolor sed qui laboris consequat commodo minim dolore fugiat id enim in fugiat mollit consequat culpa ea enim incididunt est consectetur Duis non cupidatat cillum cillum nostrud qui minim dolore Excepteur labore voluptate officia tempor do Excepteur adipisicing anim exercitation voluptate nulla nostrud deserunt nisi nulla veniam est dolore magna esse occaecat consequat enim proident aliquip exercitation pariatur et dolor in ad laboris ut sed sunt laborum adipisicing id minim veniam eiusmod est elit proident reprehenderit aliqua in proident sunt magna Excepteur.';
      this.props.editMade(this.props.currentContent);
    },
    componentDidMount: function(){
      this.refs.image.getDOMNode().onload = function() {
        this.props.setIframeSize(this.refs.image.getDOMNode().clientHeight)
      }.bind(this);
    },
    componentDidUpdate: function(){
      this.props.setIframeSize(this.refs.row.getDOMNode().clientHeight)
    },
    render: function() {
      var ctaClass = 'btn--primary';
      if(this.props.currentContent.ctaType == 1){
        ctaClass = 'btn';
      } else if(this.props.currentContent.ctaType == 2){
        ctaClass = 'btn--offers';
      } else if(this.props.currentContent.ctaType == 3){
        ctaClass = 'cta';
      }
      return (
        <div className="rowGrid article">

            <div className="col-sm-4" ref="row">

              <img ref="image" src={"//s7g10.scene7.com/is/image/waitrose/"+ this.props.currentContent.image} alt={this.props.currentContent.imageDescription} />

            </div>

            <div className="col-sm-8">

              <div className="article">

              <div className="article__text">
                
                <h2>{this.props.currentContent.heading}</h2>

                  <div className="article__text__col--2">

                    <p dangerouslySetInnerHTML={this.createBody()}/>

                    <a href={this.props.currentContent.ctaDetails[0].ctaLink} onClick={this.props.handleClick} title={this.props.currentContent.ctaDetails[0].ctaDescription} onclick="ga('send', 'event', 'Page', 'click', 'Row # | Card - Title');" className={ctaClass}>{this.props.currentContent.ctaDetails[0].ctaText}</a>

                  </div>

              </div>
                
            </div>

          </div>

        </div>
      );
    }

  });

  module.exports = ArticleTwoColumns;
