/** @jsx React.DOM */
'use strict';
var React = require('react'),
SavedItem = require('./SavedItem');
 
 

var SavedList = React.createClass({

  handleClick: function(event) {
      
  },

  componentDidMount: function(){
  },

  orderBy: function(){

    // attempt reactccstransitiongroup here

    
    // var el = this.refs.list.getDOMNode();
    // el.style.opacity = 0;
    this.props.orderData();
    var button = this.refs.orderByButton.getDOMNode();
    button.text = 'Oldest First';
    if(!button.classList.contains('active')){
      button.className += ' active';
    } else {
      button.className = 'orderByButton'
    }
  },

  search: function(){
    var site = document.querySelector('input[name = "siteRadio"]:checked').value;
    this.props.setSearchTerm(this.refs.searchTerm.getDOMNode().value, site);
  },

  render: function() {
    var savedItems = [];
    for(var index in this.props.saveData){
      savedItems.push(
          <SavedItem key={index} data={this.props.saveData[index]} site={this.props.sites[this.props.saveData[index].site]} module={this.props.modulesObj[this.props.saveData[index].module]} viewSavedModule={this.props.viewSavedModule} getSavedCode={this.props.getSavedCode} deleteSaveItem={this.props.deleteSaveItem}/>
      );
    }
    return  <ul className="list-group">
      <div className="list-group-item row ml0 mr0 noBorderBottom">
      <input ref="searchTerm" onChange={this.search} type="text" className="form-control form-control-lg" placeholder="Search..."/>
        <div className="col-md-10">
          <div className="form-check form-check-inline ml-1 mt-1">
            <label className="form-check-label">
              <input className="form-check-input" onChange={this.search} type="radio" name="siteRadio" id="inlineRadio1" value="-1" defaultChecked="checked"/> All
            </label>
          </div>
          <div className="form-check form-check-inline ml-1 mt-1">
            <label className="form-check-label">
              <input className="form-check-input" onChange={this.search} type="radio" name="siteRadio" id="inlineRadio1" value="0"/> Cellar
            </label>
          </div>
          <div className="form-check form-check-inline mt-1">
            <label className="form-check-label">
              <input className="form-check-input" onChange={this.search} type="radio" name="siteRadio" id="inlineRadio2" value="1"/> Florist
            </label>
          </div>
          <div className="form-check form-check-inline mt-1">
            <label className="form-check-label">
              <input className="form-check-input" onChange={this.search} type="radio" name="siteRadio" id="inlineRadio3" value="2"/> Gifts
            </label>
          </div>
          <div className="form-check form-check-inline mt-1">
            <label className="form-check-label">
              <input className="form-check-input" onChange={this.search} type="radio" name="siteRadio" id="inlineRadio3" value="3"/> TMG
            </label>
          </div>
        </div>
        <div className="col-md-2">
        <a href="#" ref="orderByButton" className="orderByButton" onClick={this.orderBy}>Newest First</a>
        </div>
      </div>
      <div ref="list" className="opacList">
        {savedItems}
      </div>
    </ul>
  }

});

module.exports = SavedList;
