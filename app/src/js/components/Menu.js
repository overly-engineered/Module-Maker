/** @jsx React.DOM */
'use strict';
var React = require('react'),
HomeButton = require('./HomeButton'),
ModuleDropDown = require('./ModuleDropDown'),
SiteDropDown = require('./SiteDropDown');
 
 

var Menu = React.createClass({
  handleSiteChange: function(e){
    this.props.siteChange(parseInt(e.target.getAttribute("value")));
  },
  render: function() {
    var moduleItems = this.props.modules.map(function(item) {
      if(!item.category){
        return <ModuleDropDown key={item.id}
                          name={item.name}
                          width={item.width}
                          viewModule={this.props.viewModule}
                          description={item.description}
                          multiCta = {item.multiCta}
                          depth = {item.depth}
                          sizeable = {item.sizeable} />
      }
    }.bind(this))
    var siteItems = this.props.sites.map(function(item) {
      return <SiteDropDown key={item.id}
                        name={item.name}
                        siteChange={this.props.siteChange} />
    }.bind(this))
    var colors = [{backgroundColor:'#5c8018'},{backgroundColor:'#86b1be'},{backgroundColor:'#beb089'}];
    var borders = [{borderColor:'#5c8018'},{borderColor:'#86b1be'},{borderColor:'#beb089'}];
    return (
      <ul className="nav nav-pills py-3 my-3 clearfix" style={borders[this.props.currentSite]}>
        <div className="col-sm-10">
          <li className="nav-item mr-2 d-inline-block">
            <HomeButton viewMenu={this.props.viewMenu} />
          </li>
          <li className="nav-item mr-2 d-inline-block">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Modules
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {moduleItems}
              </div>
            </div>
          </li>
          <li className="nav-item d-inline-block">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonSite" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sites
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonSite">
                {siteItems}
              </div>
            </div>
          </li>
        </div>
        <div className="col-sm-2">
          <li className="nav-item float-right">
            <h2><span className="badge" style={colors[this.props.currentSite]}>{this.props.sites[this.props.currentSite].name}</span></h2>
          </li>
        </div>
      </ul>
    );
  }

});

module.exports = Menu;
