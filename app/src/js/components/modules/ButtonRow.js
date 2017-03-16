/** @jsx React.DOM */
  'use strict';
  var React = require('react'),
      TextLink = require('./TextLink');


  var Feature = React.createClass({
    _handleClick(event) {
      event.preventDefault()
      var el = event.target
    },
    componentWillMount: function(){
      if(!this.props.currentContent.savedState){
        this.props.currentContent.image = 'c-of-mywaitrose-banner';
        this.props.currentContent.currentColumnSize = 'col-xs-3';
        this.props.editMade(this.props.currentContent);
      } else {
        this.props.currentContent.savedState = false;
      }
    },
    componentDidMount: function(){
        this.props.setIframeSize(46)
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

      var linklist = this.props.currentContent.ctaDetails.map(function(item) {
      return <div className={this.props.currentContent.currentColumnSize} key={item.id}><TextLink key={item.id}
                        individualLinkContent={item}
                        currentContent={this.props.currentContent}
                        editMade={this.props.editMade} currentSite={this.props.currentSite} /></div>
      
      }.bind(this))

      return (
        <div className="rowGrid" ref="row">
          {linklist}
        </div>
      );
    }

  });

  module.exports = Feature;
