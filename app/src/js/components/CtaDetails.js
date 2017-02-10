/** @jsx React.DOM */
'use strict';
var React = require('react');


var CtaDetails = React.createClass({

  handleEdit: function(event){
    for(var propertyName in this.props.individualLinkContent) {
      if(propertyName = event.target.id){
        this.props.individualLinkContent[propertyName] = event.target.value;
      }
    }
    this.props.editMade(this.props.currentContent);
  },

  render: function() {
    var carouselClass = 'carousel-item';
    if(this.props.individualLinkContent.id == 1){
      carouselClass += ' active';
    }
    return (
      <div className={carouselClass} key={this.props.key}>
        <div className="form-group">
          <h6>Link {this.props.individualLinkContent.id}.</h6>
          <label htmlFor="ctaText">CTA</label>
          <input onChange={this.handleEdit} type="text" className="form-control" id="ctaText" aria-describedby="ctaTextHelp" value={this.props.individualLinkContent.ctaText}/>
          <small id="ctaTextHelp" className="form-text text-muted">Enter the CTA Text for the asset</small>

          <label htmlFor="ctaLink">Link</label>
          <input onChange={this.handleEdit} type="text" className="form-control" id="ctaLink" aria-describedby="ctaLinkHelp" value={this.props.individualLinkContent.ctaLink}/>
          <small id="ctaLinkHelp" className="form-text text-muted">Enter the link for the asset</small>

          <label htmlFor="ctaDescription">CTA Description</label>
          <input onChange={this.handleEdit} type="text" className="form-control" id="ctaDescription" aria-describedby="ctaDescriptionHelp" value={this.props.individualLinkContent.ctaDescription}/>
          <small id="ctaDescriptionHelp" className="form-text text-muted">Enter the description for the asset</small>

          <label htmlFor="destinationPage">Asset destination</label>
          <input onChange={this.handleEdit} type="text" className="form-control" id="destinationPage" aria-describedby="destinationPageHelp" value={this.props.individualLinkContent.destinationPage}/>
          <small id="destinationPageHelp" className="form-text text-muted">Enter the destination page for the asset</small>

        </div>
      </div>
    );
  }

});

module.exports = CtaDetails;
