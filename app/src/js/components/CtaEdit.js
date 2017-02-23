/** @jsx React.DOM */
'use strict';
var React = require('react'),
CtaDetails = require('./CtaDetails'),
NewCtaButton = require('./NewCtaButton'),
RemoveCtaButton = require('./RemoveCtaButton');


var CtaEdit = React.createClass({

  handleEdit: function(event){
    for(var propertyName in this.props.currentContent) {
      if(propertyName = event.target.id){
        this.props.currentContent[propertyName] = event.target.value;
      }
    }
    this.props.editMade(this.props.currentContent);
  },
  buttonChange: function(event){
    this.props.currentContent.ctaType = event.target.value;
    this.props.editMade(this.props.currentContent);
  },
  render: function() {
    var ctaHTML = this.props.currentContent.ctaDetails.map(function(item) {
      return <CtaDetails key={item.id}
                        individualLinkContent={item}
                        currentContent={this.props.currentContent}
                        editMade={this.props.editMade} />
    }.bind(this))
    var navLeft = '';
    var navRight = '';
    var isCarousel = '';
    var removeButton = '';
    var ctaTypes = '';
    if(this.props.currentContent.ctaDetails.length > 1){
      navLeft = <a className="carousel-control-prev" href="#ctaCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>;
      navRight = <a className="carousel-control-next" href="#ctaCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>;
      isCarousel = 'carousel-inner';
      removeButton = <RemoveCtaButton removeCta={this.props.removeCta}/>
    }
    var addButton = '';
    
    if(this.props.currentModule.multiCta){
      addButton = <NewCtaButton addCta={this.props.addCta}/>
    }
    if(this.props.currentModule.ctaDiff){
      ctaTypes = <div className="card-block">
          <label className="custom-control custom-radio">
            <input id="radio1" name="radio" type="radio" className="custom-control-input" defaultChecked="checked" value="0" onClick={this.buttonChange}/>
            <span className="custom-control-indicator" ></span>
            <span className="custom-control-description">Green Button</span>
          </label>
          <label className="custom-control custom-radio">
            <input id="radio2" name="radio" type="radio" className="custom-control-input" value="2" onClick={this.buttonChange}/>
            <span className="custom-control-indicator" ></span>
            <span className="custom-control-description">Offers Button</span>
          </label>
          <label className="custom-control custom-radio">
            <input id="radio3" name="radio" type="radio" className="custom-control-input" value="1" onClick={this.buttonChange}/>
            <span className="custom-control-indicator" ></span>
            <span className="custom-control-description">White Button</span>
          </label>
          <label className="custom-control custom-radio">
            <input id="radio4" name="radio" type="radio" className="custom-control-input" value="3" onClick={this.buttonChange}/>
            <span className="custom-control-indicator" ></span>
            <span className="custom-control-description">Text</span>
          </label>
        </div>;
    }
    return (
      
      <div>
        <label htmlFor="promoID">Promo name</label>
        <input onChange={this.handleEdit} type="text" className="form-control" id="promoID" aria-describedby="promoIDHelp" value={this.props.currentContent.promoID}/>
        <small id="promoIDHelp" className="form-text text-muted">Enter the promoID for the asset</small>
        <label htmlFor="currentPage">Asset Page</label>
        <input onChange={this.handleEdit} type="text" className="form-control" id="currentPage" aria-describedby="currentPageHelp" value={this.props.currentContent.currentPage}/>
        <small id="currentPageHelp" className="form-text text-muted">Enter the Page location for the asset</small>
                <label htmlFor="assetPosition">Asset Position</label>
        <input onChange={this.handleEdit} type="text" className="form-control" id="assetPosition" aria-describedby="assetPositionHelp" value={this.props.currentContent.assetPosition}/>
        <small id="assetPositionHelp" className="form-text text-muted">Enter where on the page the asset is going to be positioned</small>
        {ctaTypes}
        
        <div id="ctaCarousel" className="carousel slide" data-interval="false">
          <div className={isCarousel} role="listbox">
            {ctaHTML}
          </div>
          {navLeft}
          {navRight}
        </div>
        {addButton}
        {removeButton}
      </div>
    );
  }

});

module.exports = CtaEdit;
